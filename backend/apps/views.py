from datetime import timezone

from django.http import JsonResponse
from django.shortcuts import render
import os
import openai
from django.shortcuts import get_object_or_404

from dotenv import load_dotenv
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .serializers import ChatRoomSerializer
from users.models import User
from .models import ChatRoom
from .models import GPTQuestion, UserAnswer

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

class GPTAnswerView(APIView):
    parser_classes = (JSONParser,)

    @swagger_auto_schema(
        operation_description="GPT 답변 생성 및 저장",
        operation_id="GPT 답변 생성 및 저장",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'question_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='question_id 입력'),
            },
        ),
        responses={
            201: openapi.Response(description="GPT 답변 생성 완료"),
            400: "Bad request",
        },
    )
    def post(self, request, *args, **kwargs):
        # 클라이언트 요청에서 'question_id'를 안전하게 추출
        question_id = request.data.get('question_id')
        if not question_id:
            return Response({"error": "question_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        # question_id를 사용하여 GPTQuestion 객체를 가져옴
        question = get_object_or_404(GPTQuestion, id=question_id)

        # GPT-3를 사용하여 답변 생성
        gpt_answer_content = self.generate_gpt_answer(question.content)
        if gpt_answer_content is None:
            return Response({"error": "Failed to generate GPT answer"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # 생성된 답변을 UserAnswer 모델에 저장
        user_answer = UserAnswer(question=question, content=gpt_answer_content)
        user_answer.save()

        return Response({"message": "GPT answer generated successfully"}, status=status.HTTP_200_OK)

    def generate_gpt_answer(self, question_content):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You will talk to the child. Your purpose is to find out what the child is thinking. Continue the conversation with only soft and easy words like talking to the child. Just ask me one question unconditionally. And we will talk in Korean. If the baby talks off topic in the middle, please lead the conversation again. Ask the child 3 times if he wants to stop the conversation and stop it."},
                {"role": "user", "content": question_content},
            ],
        )

        gpt_answer_content = response['choices'][0]['message']['content']

        return gpt_answer_content

def generate_image(content): # openai 이용하여 이미지 생성하는 함수

    messages = []
    promptmessages = "요약 내용을 바탕으로 이미지를 생성해줘."

    story_content = promptmessages+content
    messages.append({"role": "user", "content": story_content})

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    assistant_response = completion['choices'][0]['message']['content']

    messages.append({"role": "assistant", "content": assistant_response})

    prompt = assistant_response[0:999] # 프롬프트가 1000자가 최대이므로

    response = openai.Image.create(prompt=prompt, n=1, size="1024*1024") # gpt에게 받은 프롬프팅을 전달하여 그림생성
    image_url = response["data"][0]["url"]

    return image_url  # 임시로 이미지 url을 리턴하도록 설정

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

