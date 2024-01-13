from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Diary
from django.http import Http404


class DiaryCreateView(APIView):
    @swagger_auto_schema(
        operation_id='일기 생성',
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'content': openapi.Schema(type=openapi.TYPE_STRING, description='일기 내용'),
                'img_url': openapi.Schema(type=openapi.TYPE_STRING, description='이미지 URL'),
            }
        )
    )
    def post(self, request, format=None):
        if not request.user.is_authenticated:
            return Response({"status": "401", "message": "인증되지 않은 사용자"}, status=status.HTTP_401_UNAUTHORIZED)

        content = request.data.get("content")
        img_url = request.data.get("img_url")

        # content가 비어있는지 검사
        if not content:
            return Response({"status": "400", "message": "Content is required"}, status=status.HTTP_400_BAD_REQUEST)

        # 일기 생성
        diary = Diary.objects.create(
            user=request.user,
            content=content,
            img_url=img_url
        )

        return Response({
            "status": "200",
            "message": "일기 생성 성공",
            "diaryId": diary.id
        }, status=status.HTTP_201_CREATED)





class DiaryView(APIView):
    def get_object(self, pk):
        try:
            return Diary.objects.get(pk=pk)
        except Diary.DoesNotExist:
            raise Http404

    @swagger_auto_schema(
        operation_id="일기 조회"
    )
    def get(self, request, pk, format=None):
        diary = self.get_object(pk)
        diary_data = {
            "status": "200",
            "message": "일기 조회 성공",
            "diaryContent": diary.content,
            "created_at": diary.created_at.strftime("%Y-%m-%d"),
            "imageURL": diary.img_url
        }
        return Response(diary_data)


class DiaryListView(APIView):
    @swagger_auto_schema(
        operation_id="일기 전체 조회"
    )
    def get(self, request, format=None):
        diary_list = Diary.objects.all()
        data = [
            {
                "diaryId": str(diary.id),
                "content": diary.content,
                "imageURL": diary.img_url,
                "created_at": diary.created_at.strftime("%Y-%m-%d")
            }
            for diary in diary_list
        ]
        response = {
            "status": "200",
            "message": "일기 전체 조회 성공",
            "data": data
        }
        return Response(response)


class DiaryDeleteView(APIView):
    @swagger_auto_schema(
        operation_id="일기 삭제",
    )
    def delete(self, request, pk, format=None):
        try:
            diary = Diary.objects.get(pk=pk)
            diary.delete()
            return Response({"status": "200", "message": "삭제 성공"}, status.HTTP_200_OK)
        except Diary.DoesNotExist:
            return Response({"status": "404", "message": "일기를 찾을 수 없음"},status=status.HTTP_404_NOT_FOUND)
