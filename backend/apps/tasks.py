# tasks.py
from celery import shared_task
from stt import speech_to_text  # stt.py에서 speach_to_text 함수를 가져옵니다.

@shared_task
def speech_to_text_task(audio_data):
    # 오디오 데이터를 STT로 변환
    try:
        text = speech_to_text(audio_data)
        return text
    except Exception as e:
        # 오류 발생시 처리
        return f"STT 변환 실패: {e}"
