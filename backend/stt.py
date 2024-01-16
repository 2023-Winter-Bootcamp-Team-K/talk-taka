import os
import sys
import requests
from dotenv import load_dotenv


def speach_to_text(data):
    load_dotenv()
    client_id = os.getenv("CLOVA_STT_ID")
    client_secret = os.getenv("CLOVA_STT_SECRET")
    lang = "Kor"  # 언어 코드 ( Kor, Jpn, Eng, Chn )
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + lang
    headers = {
        "X-NCP-APIGW-API-KEY-ID": client_id,
        "X-NCP-APIGW-API-KEY": client_secret,
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

