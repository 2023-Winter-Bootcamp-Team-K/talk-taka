from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from storage import get_file_url

def main_page(request):
    return HttpResponse("메인페이지입니다!")

def before_login_page(request):
    return HttpResponse("로그인 하기전 메인페이지입니다!")

#로그인 인증된 사람만 들어올 수 있게 할것!
def after_login_page(request):
    return HttpResponse("로그인 한 후 메인페이지입니다!")


class UploadProfilePictureView(APIView):
    parser_classes = [MultiPartParser]
    def post(self, request):
        try:
            # 사용자로부터 프로필 사진을 입력 받음
            image_file = request.FILES.get("picture")

            # 파일이 없을 경우의 예외 처리
            if not image_file:
                return Response({"error": "이미지 파일이 필요합니다."}, status=status.HTTP_400_BAD_REQUEST)

            # s3에 파일 업로드 후 url 반환
            image_file_url = get_file_url("image", image_file)

            # 응답 데이터에 업로드된 이미지의 URL 포함
            return Response({"message": "이미지 전송 성공", "url": image_file_url}, status=status.HTTP_201_CREATED)
        except Exception as e:
# 파일 업로드 중 오류 발생
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)