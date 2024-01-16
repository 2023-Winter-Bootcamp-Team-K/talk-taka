from __future__ import absolute_import, unicode_literals
from celery import shared_task
import openai
import os
from dotenv import load_dotenv
import boto3
import tempfile
from urllib.parse import urlparse

from apps.models import GPTQuestion, UserAnswer


load_dotenv()
NAVER_CLIENT_ID = os.environ.get("CLOVA_TTS_ID")
NAVER_CLIENT_SECRET = os.environ.get("CLOVA_TTS_SECRET")
@shared_task
def process_stt_data(audio_file_url):
    # S3에서 file_key를 가져오기
    parsed_url = urlparse(audio_file_url)
    audio_file_key = parsed_url.path.lstrip("/")

    s3_client = boto3.client(
        's3',
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY"),
    )

    try:
        # 음성 파일 객체를 S3 버킷에서 가져오기
        response = s3_client.get_object(Bucket=os.environ.get("AWS_STORAGE_BUCKET_NAME"), Key=audio_file_key) #음성파일 가져오기

        # 음성 파일 객체로부터 음성 파일 추출
        audio_file = response['Body'].read()

    except Exception as e:
        # 오류 처리
        print(f"오류 발생: {e}")
        return "파일을 불러올 수 없습니다."

    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
    temp_file_path = temp_file.name
    # 임시 음성 파일 생성
    with open(temp_file_path, "wb") as file:
        file.write(audio_file)

    headers = {
        "Content-Type": "application/octet-stream",
        "X-NCP-APIGW-API-KEY-ID": NAVER_CLIENT_ID,
        "X-NCP-APIGW-API-KEY": NAVER_CLIENT_SECRET,
    }

    with open(temp_file_path, "rb") as fp:
        response = requests.post("https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor",
                                 data=fp,
                                 headers=headers)

    if response.status_code != 200:
        print(f"오류 발생: {response.status_code}")
        return "음성 인식에 실패했습니다."

    transcription =response.json().get('text')
    # last_question = Question.objects.get(question_id=question_id)

    # Answer.objects.create(content=transcription, question_id=last_question, recode_file=audio_file_url)

    temp_file.close()

    # 임시 파일 삭제
    os.unlink(temp_file_path)

    return transcription