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
    try:
        # Dall-E 이미지 생성 (여기서는 가상의 코드로, 실제 구현에 맞게 수정해야 함)
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

        # S3에 이미지 업로드 및 URL 획득
        s3_url = get_file_url("image", image_data)

        # Diary 객체 찾기 및 이미지 URL 저장
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

