from django.contrib.auth import get_user_model
from django.http import JsonResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, generics
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterSerializer, LoginSerializer, RefreshTokenSerializer

# 유저 모델 불러오기
User = get_user_model()

# 회원가입
class RegisterView(APIView):
    parser_classes = [JSONParser]
    serializer_class = RegisterSerializer

    @swagger_auto_schema(
        request_body=RegisterSerializer,
        operation_id="회원 가입",
        responses={201: RegisterSerializer(many=False)}
    )
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                # Add a success message when registration is successful
                return Response({'status': '201',
                                 'message': '회원 가입 성공'}, status=status.HTTP_201_CREATED)

        # Add a failure message when registration fails
        return Response({'message': '회원 가입에 실패하였습니다', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# 로그인
class LoginView(generics.GenericAPIView):
    parser_classes = [JSONParser]
    serializer_class = LoginSerializer

    # 로그인 성공하면 토큰을 발급시켜주는 코드
    @swagger_auto_schema(operation_id="사용자 로그인")
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        refresh = RefreshToken.for_user(user)

        # refresh token, access token
        return Response({
            'id': user.id,
            'refresh': str(refresh),
            'access': f"Bearer {str(refresh.access_token)}",
            'status': status.HTTP_200_OK,
            'message': '로그인 성공'
        }, status=status.HTTP_200_OK)

# 로그아웃
class LogoutView(APIView):
    parser_classes = [JSONParser]

    @swagger_auto_schema(
        request_body=RefreshTokenSerializer,
        operation_id="로그아웃 (토큰 blacklist)"
    )
    def post(self, request):
        try:
            refresh_token = request.data['refresh']
            token = RefreshToken(refresh_token)

            # 로그아웃 시 해당 token을 blacklist해서 auth를 위해 사용 불가하게 만든다. ->다시 사용불가
            token.blacklist()

            # 로그아웃 성공 시 "로그아웃 성공" 메시지를 포함한 응답을 반환
            return Response({
                'status': '200',
                'message': '로그아웃 성공'
            }, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            # 오류 발생 시 오류 메시지를 포함한 응답을 반환
            return Response({'message': '로그아웃 실패'}, status=status.HTTP_400_BAD_REQUEST)

# soft-delete
class DeleteUserView(generics.DestroyAPIView):
    queryset = User.objects.all()
    lookup_field = 'id'

    @swagger_auto_schema(
        operation_id="회원 탈퇴",
    )
    def delete(self, request, *args, **kwargs):
        user = self.get_object()
        user.delete()
        return Response({'message': '회원탈퇴 성공'}, status=status.HTTP_204_NO_CONTENT)

def hello(request):
    data = {'message': 'hello world'}
    return JsonResponse(data)


