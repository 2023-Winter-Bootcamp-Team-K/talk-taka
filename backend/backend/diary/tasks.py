import logging
import os

from celery import shared_task
from django.db import transaction
from dotenv import load_dotenv
from openai import OpenAI
from .models import Diary
from storage import get_file_url
import requests

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
logger = logging.getLogger(__name__)


@shared_task
def generate_image_task(chat_room_id, summary):
<<<<<<< HEAD
    """
    비동기적으로 Dall-E 이미지를 생성하고, 생성된 이미지 URL을 ChatRoom 모델에 저장하는 Celery 작업입니다.
    :param chat_room_id: ChatRoom 인스턴스의 ID
    :param summary: 대화 요약 내용
    """
    # Dall-E 이미지 생성
    response = client.images.generate(
        model="dall-e-3",
        prompt=f'{summary}'f'From now on, you will be drawing illustrations to be included in a child\'s picture diary.'
        f'You should follow the following instructions :'
        f'Use seed number 3129831613. Do not arbitrarily change the prompt below, but use it as it is to create an image.Create an image that captures the essence of a drawing by a child, influenced by the uploaded reference. The artwork should mimic the style of the child-like sketch, complete with simplistic shapes, bright and primary colors, and the innocent charm of a child\'s artistry.The drawing should look like it\'s done with crayons or markers, with bold lines, and it should have a happy, playful atmosphere.'
        f'The image should maintain the same style and characteristics as the one produced with the given seed number.'
        f'1.Draw the illustration based on the summary provided. '
        f'2.Create an illustration that suits a child\'s picture diary.'
        f'3.If there are human illustrations, color the skin in #FDECE2.'
        f'4.You never include any text in the illustration.'
        f'Remember, you should follow these instructions',
        size="1024x1024",
        quality="standard",
        n=1,
        style="natural",
    )
    image_url = response.data[0].url
    response = requests.get(image_url)
    image_data = response.content
=======
    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=summary,
            size="1024x1024",
            quality="standard",
            n=1,
            style="natural",
        )
        image_url = response.data[0].url
        response = requests.get(image_url)
        image_data = response.content
>>>>>>> develop

        s3_url = get_file_url("image", image_data)

        # chat_room_id를 사용하여 해당 Diary 객체를 찾고, 이미지 URL을 저장합니다.
        diary = Diary.objects.filter(chat_room__id=chat_room_id).latest('created_at')
        diary.image_url = s3_url
        diary.image_status = 'completed'
        diary.save()

    except Diary.DoesNotExist:
        logger.error(f"No Diary found for chat_room_id: {chat_room_id}", exc_info=True)
        return None
    except Exception as e:
        logger.error(f"Error in generate_image_task: {e}", exc_info=True)
        return None

    return s3_url

