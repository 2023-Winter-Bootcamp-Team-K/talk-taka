from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Diary
from django.http import Http404

class DiaryCreateView(APIView):
    @swagger_auto_schema(operation_id='일기 생성')
    @method_decorator(login_required)
    def post(self, request, format=None):
        user = request.user
        content = request.data.get('content')
        summary = request.data.get('summary')  # gpt가 요약해준 내용
        img_url = request.data.get('img_url')  # dall-e가 생성해 준 이미지

        diary = Diary.objects.create(
            user=user,
            content=content,
            summary=summary,
            img_url=img_url
        )
        return Response(
            {
                "status": status.HTTP_201_CREATED,
                "message": "일기 생성 성공",
                "diaryId": diary.id
            }, status=status.HTTP_201_CREATED
        )

class DiaryView(APIView):
    def get_object(self, diary_id):
        try:
            return Diary.objects.get(pk=diary_id)
        except Diary.DoesNotExist:
            raise Http404

    @swagger_auto_schema(
        operation_id="일기 조회"
    )
    def get(self, request, diary_id, format=None):
        diary = self.get_object(diary_id)
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
                "imageURL": diary.img.url,
                "created_at": diary.created_at.strftime("%Y-&m-%d")
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
            return Response({"status": "200", "message":"삭제 성공"}, status.HTTP_200_OK)
        except Diary.DoesNotExist:
            return Response({"status": "404", "message":"일기를 찾을 수 없음"},status=status.HTTP_404_NOT_FOUND)
