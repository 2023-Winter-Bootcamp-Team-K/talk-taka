import os

from celery import shared_task
from dotenv import load_dotenv
from openai import OpenAI
from .models import Diary

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)


@shared_task
def generate_image_task(chat_room_id, summary):
    """
    비동기적으로 Dall-E 이미지를 생성하고, 생성된 이미지 URL을 ChatRoom 모델에 저장하는 Celery 작업입니다.
    :param chat_room_id: ChatRoom 인스턴스의 ID
    :param summary: 대화 요약 내용
    """
    # Dall-E 이미지 생성
    response = client.images.generate(
        model="dall-e-3",
        prompt=summary,
        size="1024x1024",
        quality="standard",
        n=1,
        style="natural",
    )
    image_url = response.data[0].url

    diary = Diary.objects.get(pk=chat_room_id)  # 대문자를 소문자로 변경
    diary.img_url = image_url
    diary.save()

    return image_url