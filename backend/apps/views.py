from datetime import timezone
import os
import openai
from django.shortcuts import get_object_or_404
from django.utils import timezone
from dotenv import load_dotenv
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser

from .chat_consumer import ChatConsumer
from users.models import User
from .models import ChatRoom
from .serializers import ChatRoomSerializer
from diary.views import DiaryCreateView

from diary.models import Diary

load_dotenv()
from .models import GPTQuestion, UserAnswer
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

# class GPTAnswerView(APIView):
#     parser_classes = (JSONParser,)
#
#     @swagger_auto_schema(
#         operation_description="GPT 답변 생성 및 저장",
#         operation_id="GPT 답변 생성 및 저장",
#         request_body=openapi.Schema(
#             type=openapi.TYPE_OBJECT,
#             properties={
#                 'question_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='question_id 입력'),
#             },
#         ),
#         responses={
#             201: openapi.Response(description="GPT 답변 생성 완료"),
#             400: "Bad request",
#         },
#     )
#     def post(self, request, *args, **kwargs):
#         # 클라이언트 요청에서 'question_id' 추출
#         question_id = request.data.get('question_id')
#         if not question_id:
#             return Response({"error": "question_id is required"}, status=status.HTTP_400_BAD_REQUEST)
#
#         # question_id를 사용하여 GPTQuestion 객체를 가져옴
#         question = get_object_or_404(GPTQuestion, id=question_id)
#
#         # GPT-3를 사용하여 답변 생성
#         gpt_answer_content = self.generate_gpt_answer(question.content)
#         if gpt_answer_content is None:
#             return Response({"error": "Failed to generate GPT answer"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#
#         # 생성된 답변을 UserAnswer 모델에 저장
#         user_answer = UserAnswer(question=question, content=gpt_answer_content)
#         user_answer.save()
#
#         return Response({"message": "GPT answer generated successfully"}, status=status.HTTP_200_OK)
#
#     def generate_gpt_answer(self, question_content):
#         response = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             messages=[
#                 {"role": "system", "content": "You will talk to the child. Your purpose is to find out what the child is thinking. Continue the conversation with only soft and easy words like talking to the child. Just ask me one question unconditionally. And we will talk in Korean. If the baby talks off topic in the middle, please lead the conversation again. Ask the child 3 times if he wants to stop the conversation and stop it."},
#                 {"role": "user", "content": question_content},
#             ],
#         )
#
#         gpt_answer_content = response['choices'][0]['message']['content']
#
#         return gpt_answer_content

class ChatRoomCreateView(APIView):

    @swagger_auto_schema(
        operation_id="채팅방 생성",
        responses={201: ChatRoomSerializer(many=False)}
    )
    def post(self, request, format=None):
        # 사용자 인증 확인
        if not request.user.is_authenticated:
            return Response({"status": "401", "message": "인증되지 않은 사용자"}, status=status.HTTP_401_UNAUTHORIZED)

        # 채팅방 생성
        chat_room = ChatRoom.objects.create(user_id=request.user)

        # 필요한 경우, 여기에서 chat_room에 다른 값들을 설정할 수 있습니다.
        # 예: chat_room.owner = request.user

        # 채팅방 저장
        chat_room.save()

        # 응답 데이터에 채팅방 ID 포함
        response_data = {
            "chat_room_id": chat_room.id,
            # 필요한 경우, 다른 정보도 포함할 수 있습니다.
        }
        return Response(response_data, status=status.HTTP_201_CREATED)


class ChatRoomCloseView(APIView):
    @swagger_auto_schema(
        operation_id="채팅방 종료",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'chat_room_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='채팅방 ID'),
            },
            required=['chat_room_id']
        ),
        responses={
            200: openapi.Response(description="채팅방 종료 및 결과 반환"),
            400: "Bad request",
        }
    )
    def post(self, request, *args, **kwargs):
        chat_room_id = request.data.get('chat_room_id')
        if not chat_room_id:
            return Response({"error": "채팅방이 생성되지 않았습니다."}, status=status.HTTP_400_BAD_REQUEST)

        chat_room = get_object_or_404(ChatRoom, pk=chat_room_id)
        conversation = self.get_conversation(chat_room)

        consumer = ChatConsumer()
        summary = consumer.generate_summary(conversation)
        image_url = consumer.generate_image(summary)

        chat_room.delete_at = timezone.now()
        chat_room.save()

        # 다이어리 생성 요청
        diary = Diary.objects.create(user=request.user)
        return Response({
            "status": "201",
            "message": "채팅방 종료 및 다이어리 생성 성공",
            "diaryId": str(diary.id)
        }, status=status.HTTP_201_CREATED)

    def get_conversation(self, chat_room):
        questions = GPTQuestion.objects.filter(chatroom_id=chat_room)
        conversation = [question.content for question in questions]
        return conversation




