from datetime import timezone

from django.http import JsonResponse
from django.shortcuts import render
import os
import openai
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from drf_yasg.utils import swagger_auto_schema
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from rest_framework.parsers import JSONParser
from .serializers import ChatRoomSerializer
from users.models import User


def index(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

class GPTAnswerView(APIView):
    parser_classes = (JSONParser,)

    def post(self, request, *args, **kwargs):
        question_id = request.data.get('question_id')
        question = get_object_or_404(GPTQuestion, pk=question_id)

        gpt_answer_content = self.generate_gpt_answer(question.content)

        if gpt_answer_content is None:
            return Response({"message": "GPT 답변 생성 실패"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        gpt_answer = GPTQuestion(content=gpt_answer_content, question=question)
        gpt_answer.save()

        return Response({"message": "GPT 답변 생성 완료"}, status=status.HTTP_200_OK)

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


class ImageView(APIView):
    parser_classes = (JSONParser,)
    def post(self, request, *args, **kwargs):
        # 요약 내용을 요청 데이터에서 받아옵니다.
        summary = request.data.get('summary')

        # 요약 내용을 이용하여 이미지를 생성합니다.
        image_url = self.generate_image(summary)
        if image_url is None:
            return Response({"message": "이미지 생성 실패"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'image_url': image_url}, status=status.HTTP_200_OK)

    def generate_image(self, prompt):
        try:
            response = openai.images.generate(
                model="dall-e-3",
                prompt=prompt,  # 요약된 내용을 prompt로 사용
                size="1024x1024",
                quality="standard",
                n=1,
            )
            # 이미지 URL 추출 및 반환
            image_url = response.data[0].url
            return image_url
        except Exception as e:
            # 오류 처리
            print(f"이미지 생성 중 예외 발생: {e}")
            return None

class ChatRoomCreateView(APIView):

    @swagger_auto_schema(
        operation_id="채팅방",
    )
    def post(self, request, format=None):
        serializer = ChatRoomSerializer(data=request.data)
        if serializer.is_valid():
            chat_room = serializer.save()
            # 여기에서 chat_room에 다른 필요한 값들을 설정할 수 있습니다.
            return Response(ChatRoomSerializer(chat_room).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)