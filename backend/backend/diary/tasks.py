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
        response = client.images.generate(
            model="dall-e-3",
            prompt=f'{summary} You must draw an illustration to use in the child\'s picture diary based on this summary.'
                   f'You must draw this illustration as cute and lovely.'
                   f'You must refer to seed number 3129831613 and draw in a similar style.'
                   f'If there are human illustrations, you must color the skin into #fdece2.'
                   f'Color every picture that goes into the illustration.'
                   f'Draw the illustration as one picture without dividing it.'
                   f'Never put any text in the illustration.',
            size="1024x1024",
            quality="standard",
            n=1,
            style="natural",
        )
        image_url = response.data[0].url
        response = requests.get(image_url)
        image_data = response.content

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

