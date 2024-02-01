# tasks.py
import os
from celery import shared_task
import requests
from dotenv import load_dotenv
from storage import get_file_url
import boto3
import uuid
from openai import OpenAI
import logging
from .models import ChatRoom  # ChatRoom 모델을 가져옵니다.
load_dotenv()

OPENAI_API_KEY=os.getenv('OPENAI_API_KEY')
client=OpenAI(api_key=OPENAI_API_KEY)
logger = logging.getLogger(__name__)

def speech_to_text(data):

    lang = "Kor"  # 언어 코드 ( Kor, Jpn, Eng, Chn )
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + lang
    headers = {
        "X-NCP-APIGW-API-KEY-ID": os.getenv('CLOVA_STT_ID'),
        "X-NCP-APIGW-API-KEY": os.getenv('CLOVA_STT_SECRET'),
        "Content-Type": "application/octet-stream"
    }
    response = requests.post(url, data=data, headers=headers)
    response_json = response.json()
    rescode = response.status_code
    if (rescode == 200):
        text = response_json.get('text')
        return text
    else:
        print("Error : " + response.text)


def get_file_url(file_type, file):
    # AWS SDK 클라이언트 생성:
    s3_client = boto3.client(
        's3',
        aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
        aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
    )
    #  boto3는 AWS 서비스와 상호작용하는 데 사용되는 파이썬 라이브러리. 클라이언트는 AWS의 s3 서비스에 연결시켜줌

    # 음성 녹음 파일(audio)인 경우
    if file_type == "audio":
        file_key = "record/" + str(uuid.uuid4()) + ".mp3"
    # 프로필 이미지 파일(image)인 경우(s3 디렉토리 추가 후 수정해야 함)
    else:
        file_key = "profile_image/" + str(uuid.uuid4()) + ".jpg"
        content_type = "image/jpeg"


    # 파일을 S3 버킷에 업로드
    s3_client.put_object(Body=file, Bucket= os.getenv('AWS_STORAGE_BUCKET_NAME'), Key=file_key) #ContentType=content_type
    # 업로드된 파일의 URL을 구성 = FILE_URL + 앞서 생성된 파일 키를 결합하여 만들어짐
    url = os.getenv('FILE_URL') + "/" + file_key

    # URL 문자열에서 공백을 "_"로 대체
    url = url.replace(" ", "_")

    return url

# stt.py에서 speach_to_text 함수를 가져옵니다.

@shared_task
def speech_to_text_task(audio_data):
    # 오디오 데이터를 STT로 변환
    try:
        text = speech_to_text(audio_data)
        return text
    except Exception as e:
        # 오류 발생시 처리
        return f"STT 변환 실패: {e}"


@shared_task
def upload_audio_to_s3_task(audio_data):
    # 'audio_data'는 ContentFile 객체 또는 유사한 파일 객체여야 합니다.
    file_url = get_file_url("audio", audio_data)
    return file_url


# tasks.py



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
     
     # 이미지 URL을 ChatRoom 모델에 저장
     chat_room = ChatRoom.objects.get(pk=chat_room_id)
     chat_room.image_url = image_url
     chat_room.save()

     return image_url
