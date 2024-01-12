import base64
import json
import asyncio
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import sync_to_async
from django.core.files.base import ContentFile

from .models import ChatRoom, GPTQuestion, UserAnswer
from users.models import User
from django.utils import timezone
import openai
import logging
import os

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
logger = logging.getLogger(__name__)

class ChatConsumer(WebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.chat_room_id = None
        self.chatroom = None
        self.your_max_tokens = 50
        self.present_Qusetion_id = None
        # 임시 코드
        self.user = None

    def connect(self, text_data=None):
        # JSON 문자열을 파이썬 객체로 변환
        if text_data is not None:
            json.loads(text_data)

        self.chat_room_id = self.scope["url_route"]["kwargs"]["roomid"]
        self.accept()

        # 임시 코드 (나중에는 이미 만들어진 chatroom를 찾는 형식으로 변ㅑㅇ)
        self.user = User.objects.get(id = 1)
        self.chatroom = ChatRoom.objects.create(
            user_id = self.user, created_at = timezone.now())
        self.chatroom.save()

        # 연결 완료 전송 (프론트에 기분 화면 활성화)
        self.send(
            text_data=json.dumps(
                {
                    "event":"connected",
                    "data": {
                        "message":"연결 됐습니다.",
                        "roomId" : self.chat_room_id,
                    }
                }
            )
        )

        """
        연결
        - 연결시작 보냄 (프론트에서 이거 받으면 화면에 기분 화면 띄움)

        receive
        - 방 생성
	        - 데이터로 기분을 전송됨
	        - 받은 데이터를 기반으로 chat room 데이터 생성
	        - GPT 질문 생성해서 전송
	        - GPT 질문 DB에 저장 client 질문내용을
        - 음성 대답
            - 음성을 STT로 텍스트로 변경
            - 음성과 텍스트 DB에 저장
            - 텍스트를 GPT에게 전송
            - GPT 질문 생성해서 전송
            - GPT 질문 DB에 저장
        - 종료 일기 생성
            - ㅇ

        """

    def receive(self, text_data):
        if text_data:
            res = json.loads(text_data)
            event = res.get("event")
            data = res.get("data")
            logger.info(res)
            # 기분 저장, 첫 대화 시작
            if event == "mood":
                # 기분 room에 저장
                mood = data.get("mood")
                if mood == None:
                    self.send(
                        text_data=json.dumps(
                            {
                                "event": "error",
                                "data": "기분이 정상적으로 넘어오지 않았습니다.",
                            }
                        )
                    )
                # 문제
                self.chatroom.add_mood(mood)

                # GPT에게 첫질문 생성
                response = openai.Completion.create(
                    model="gpt-3.5-turbo",
                    prompt="You will talk to the child. Your purpose is to find out what the child is thinking. Continue the conversation with only soft and easy words like talking to the child. Just ask me one question unconditionally. And we will talk in Korean. If the baby talks off topic in the middle, please lead the conversation again. Ask the child 3 times if he wants to stop the conversation and stop it.",
                    max_tokens=self.your_max_tokens,
                )

                gpt_answer_content = response['choices'][0]['message']['content']
                print(gpt_answer_content)

                # GPT질문 내용 전송
                self.send(
                    text_data=json.dumps(
                        {
                            "event": "GPTQuestion",
                            "data": gpt_answer_content ,
                        }
                    )
                )

                #GPT 대사


            # 음성 대답
            elif event == "UserAnswer":
                # base64 디코딩
                audio_blob = data["audioBlob"]
                audio_data = base64.b64decode(audio_blob)

                # 오디오 파일로 변환
                audio_file = ContentFile(audio_data)

                self.send(
                    text_data=json.dumps(
                        {
                            "event": "GPTQuestion",
                            "data": "adfsff",
                        }
                    )
                )
            # 대화 요약
            #elif event == "ConversationsSummary":
            #    text_data_json = json.loads(text_data)
            #    message = data

        #self.send(text_data=json.dumps({"message": message}))


    def disconnect(self, close_code):
        pass



    # DB 채팅룸 정보를 가지고 온다.
    @sync_to_async
    def get_room_by_id(self, room_id):
        try:
            return ChatRoom.objects.get(id=room_id)
        except ChatRoom.DoesNotExist:
            return None