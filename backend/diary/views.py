from datetime import timezone
from django.utils import timezone

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Diary
from django.http import Http404
from .utils import *
from apps.models import ChatRoom


class DiaryCreateView(APIView):
    @swagger_auto_schema(
        operation_id="일기 생성",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'mood': openapi.Schema(type=openapi.TYPE_STRING, description='일기의 감정'),
                'chat_room_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='채팅방 ID')
            },
            required=['mood', 'chat_room_id']
        ),
        responses={201: openapi.Response(description="일기 생성 성공")}
    )
    def post(self, request, format=None):
        if not request.user.is_authenticated:
            return Response({"status": "401", "message": "인증되지 않은 사용자"}, status=status.HTTP_401_UNAUTHORIZED)

        mood = request.data.get('mood')
        chat_room_id = request.data.get('chat_room_id')
        valid_moods = ['joy', 'sad', 'angry']

        if mood not in valid_moods:
            return Response({"status": "400", "message": "유효하지 않은 mood 값입니다"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            chat_room = ChatRoom.objects.get(id=chat_room_id)
            conversation = chat_room.get_conversation()

            summary = generate_summary(conversation)
            img_url = generate_image(summary)
            capture_url = chat_room.image_url

            diary = Diary.objects.create(
                user=request.user,
                mood=mood,
                content=summary,
                img_url=img_url,
                capture_url=capture_url
            )

            chat_room.delete_at = timezone.now()
            chat_room.save()

            return Response({
                "status": "201",
                "message": "일기 생성 성공",
                "diaryId": str(diary.id)
            }, status=status.HTTP_201_CREATED)

        except ChatRoom.DoesNotExist:
            return Response({"status": "404", "message": "채팅방을 찾을 수 없습니다"}, status=status.HTTP_404_NOT_FOUND)


class DiaryView(APIView):
    def get_object(self, pk):
        try:
            return Diary.objects.get(pk=pk)
        except Diary.DoesNotExist:
            raise Http404

    @swagger_auto_schema(operation_id="일기 조회")
    def get(self, request, pk, format=None):
        diary = self.get_object(pk)

        diary_data = {
            "status": "200",
            "message": "일기 조회 성공",
            "diaryContent": diary.content,
            "created_at": diary.created_at.strftime("%Y-%m-%d"),
            "imageURL": diary.img_url,
            "username": diary.user.username,
            "captureURL": diary.capture_url
        }
        return Response(diary_data)
class DiaryListView(APIView):
    @swagger_auto_schema(
        operation_id="일기 일정 조회"
    )

    def get(self, request, format=None):
        diary_list = Diary.objects.all()
        data = [
            {
                "diaryId": str(diary.id),
                "imageURL": diary.img_url,
                "created_at": diary.created_at.strftime("%Y-%m-%d"),
                "mood": diary.mood
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
