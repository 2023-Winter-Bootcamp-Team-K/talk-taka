# tasks.py
import os

from celery import shared_task
import requests
from dotenv import load_dotenv

load_dotenv()

def speech_to_text(data):

    lang = "Kor"  # 언어 코드 ( Kor, Jpn, Eng, Chn )
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + lang
    headers = {
        "X-NCP-APIGW-API-KEY-ID": 'qr2yjt6dz5',
        "X-NCP-APIGW-API-KEY": 'qewhS3DwFeEuObSfLgl2jpWj97qavcKKjBFelAqH',
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
