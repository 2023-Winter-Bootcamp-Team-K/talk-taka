import json
import os
import random
import time
import base64
from django.core.files.base import ContentFile
from openai import OpenAI
from channels.generic.websocket import WebsocketConsumer
from dotenv import load_dotenv
import asyncio
from storage import get_file_url
from stt import speach_to_text
from .models import *
import logging

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
logger = logging.getLogger(__name__)

class ChatConsumer(WebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.chat_room_id = None
        self.chatroom = None
        self.present_question = None
        self.user = None
        self.endTime = 10
        # 대화 기록을 저장할 리스트
        self.conversation = []
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    # 클라이언트와 연결
    def connect(self, text_data=None):
        # JSON 문자열을 파이썬 객체로 변환
        if text_data is not None:
            json.loads(text_data)
        self.chat_room_id = self.scope["url_route"]["kwargs"]["roomid"]
        self.accept()

        # chatroom를 찾아서 chatroom 오브젝트 생성
        self.chatroom = ChatRoom.objects.get(id=self.chat_room_id)
        # user 찾기
        self.user = self.chatroom.user_id
        # 연결 완료 전송 (프론트에 기분 화면 활성화)
        self.send(
            text_data=json.dumps(
                {
                    "event": "connected",
                    "data": {
                        "message": "연결 됐습니다.",
                        "roomId": self.chat_room_id,
                    }
                }
            )
        )

        # 종료 메세지 보내기
        # loop = asyncio.get_event_loop()
        # asyncio.create_task(self.send_end_message())
    def receive(self, text_data):
        if text_data:
            res = json.loads(text_data)
            event = res.get("event")
            data = res.get("data")
            logger.info(res)
            # 1. 첫 대화 시작
            if event == "conversation_start":
                # 기분 room에 추가
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
                # 기분 저장
                self.chatroom.add_mood(mood)
                self.situation_tuning(self.user, mood=mood)
                # 첫 질문 전송
                question_content = self.pick_random_question()
                self.default_conversation(self.chatroom, question_content)
                self.add_answer(answer=None)
                self.add_question(question=question_content)
                print(self.conversation)
            # 2. 음성 대답
            elif event == "user_answer":
                # base64 디코딩
                audio_blob = data["audioBlob"]
                audio_data = base64.b64decode(audio_blob)

                # 오디오 파일로 변환
                audio_file = ContentFile(audio_data)

                # 오디오 파일 STT로 텍스트 변환
                answer = speach_to_text(audio_file)

                # 임시 코드
                # answer = "재밌게 놀았어"

                # answer을 conversation 저장
                self.add_answer(answer=answer)

                # 텍스트 GPT에게 전송
                question = self.continue_conversation(self.chatroom)

                # conversation 질문, 답변 저장
                self.add_question(question=question)

                # 오디오 파일 S3에 저장
                url = get_file_url('audio', audio_file)

                # UserAnswer DB 저장 (택스트, 오디오 파일 URL)
                self.save_user_answer(question=self.present_question, content= question, url=url)

            # 3. 대화 종료
            elif event == "conversation_end":
                self.send(json.dumps({"message": "", "finish_reason": ""}))


    def disconnect(self, closed_code):
        self.chatroom.delete_at = timezone.now()
        self.chatroom.save()

    def create_chatroom(self):
        user_id = self.get_user_id()
        mood = self.get_user_mood()
        # 새 채팅방 생성 로직
        # 적절한 user_id 및 mood 값을 설정
        chatroom = ChatRoom.objects.create(user_id=user_id, mood=mood)
        return chatroom

    def save_gpt_question(self, content):
        # GPT 질문 저장
        question = GPTQuestion.objects.create(chatroom_id=self.chatroom, content=content)
        question.save()
        # 현재 질문 설정
        self.present_question = question

    def save_user_answer(self, question, content, url):
        # 사용자 답변 저장
        answer = UserAnswer.objects.create(question_id=question, content=content, url=url)
        answer.save()



    def add_question(self, question):
        self.conversation.append(
            {
                "role": "assistant",
                "content": question
            }
        )
    def add_answer(self, answer=None):
        if answer is not None:
            self.conversation.append(
                {
                    "role": "user",
                    "content": "'" + answer + "'" + " is my answer, and you give me a one question.You will talk to the child. Your purpose is to find out what the child is thinking."
                }
            )
        else:
            self.conversation.append(
                {
                    "role": "user",
                    "content": "Another question, give me only one."
                }
            )
    def continue_conversation(self, chatroom):
        messages = ""

        for chunk in self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=self.conversation,
                temperature=0.9,
                stream=True,
        ):
            finish_reason = chunk.choices[0].finish_reason

            if finish_reason == "stop":
                break

            response_message = chunk.choices[0].delta.content
            # 메시지 조각를 클라이언트로 바로 전송
            self.send(json.dumps({"message": response_message, "finish_reason": finish_reason}))
            # 메시지 조각 합침
            messages += response_message

        self.save_gpt_question(content=messages)
        return messages

    def default_conversation(self, chatroom, question_content):
        messages = ""
        # question_content의 index와 원소를 순차적으로 반환하여 스트리밍 형식으로 출력
        for index, chunk in enumerate(question_content):
            is_last_char = "incomplete"
            # 현재 글자가 마지막 글자인지 확인
            if index == len(question_content) - 1:
                is_last_char = "stop"

            # 메시지를 클라이언트로 바로 전송
            self.send(json.dumps({"event": "conversation", "message": chunk, "finish_reason": is_last_char}))

            # 마지막 글자에 도달하면 루프 종료
            if is_last_char == "stop":
                break

            messages += chunk
            time.sleep(0.05)
        # GPTQuestion 객체를 생성하고 데이터베이스에 저장
        question = GPTQuestion.objects.create(content=messages, chatroom_id=chatroom)
        question.save()

    def pick_random_question(self):
        pick_question = []
        while True:
            basic_questions_list = [
                "오늘 뭐했어?",
                "오늘 기분은 어때?",
                "오늘 가장 재미있었던 일은 뭐야?",
                "오늘 하루 잘 지냈어?",
                "안녕, 반가워 또 보네?",
                "본인의 직업관은 무엇인가요?",
                "안녕 , {username}아 오늘 날씨 어땠어?",
                "안녕 {username}아 뭐하다가 이제왔어? 기다렸잖아!!",
                "안녕, 00아 보고싶었어. 너는 어땠어?",
                "안녕, 오늘도 재밌게 놀 준비됐어? 목소리 크게!!!!",
                "오늘 힘든 일은 없었어?",
                "오늘 뭐하고 놀았어?",
                "오늘 친구들이랑 뭐하고 놀았어?",
                "오늘 하루 어땠어?",
                "Hi? 영어로 안녕이라는 뜻이야!",
                "오늘 입은 옷 예쁘네~ 좋은일 있었어?",
            ]

            question = random.choice(basic_questions_list)

            if question in pick_question:
                continue
            pick_question.append(question)
            break

        return question

    def situation_tuning(self, user, mood):
        self.conversation = [
            {
                "role": "system",
                "content": 'My name is '+user.username+' and My age is '+str(user.age)+' and My gender is ' + user.gender + 'and My mood is '+ mood +'and you will talk to the child. Your purpose is to find out what the child is thinking. Continue the conversation with only soft and easy words like talking to the child. Please ask questions by referring to age, name, and gender. Just ask me one question unconditionally. And we will talk in Korean.'
            },
        ]

    async def send_end_message(self):
        content = "채팅을 종료 해야할 것 같아"
        await asyncio.sleep(self.endTime)
        messages = ""
        # question_content의 index와 원소를 순차적으로 반환하여 스트리밍 형식으로 출력
        for index, chunk in enumerate(content):
            is_last_char = "incomplete"
            # 현재 글자가 마지막 글자인지 확인
            if index == len(content) - 1:
                is_last_char = "stop"

            # 메시지를 클라이언트로 바로 전송
            self.send(json.dumps({"event": "chat_end","message": chunk, "finish_reason": is_last_char}))

            # 마지막 글자에 도달하면 루프 종료
            if is_last_char == "stop":
                break

            messages += chunk
            time.sleep(0.05)