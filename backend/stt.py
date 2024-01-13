import os
import sys
import requests
def speach_to_text(data):
    client_id = os.getenv("clova_id")
    client_secret = os.getenv("clova_secret")
    lang = "Kor"  # 언어 코드 ( Kor, Jpn, Eng, Chn )
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + lang
    headers = {
        "X-NCP-APIGW-API-KEY-ID": client_id,
        "X-NCP-APIGW-API-KEY": client_secret,
        "Content-Type": "application/octet-stream"
    }
    response = requests.post(url, data=data, headers=headers)
    rescode = response.status_code
    if (rescode == 200):
        print(response.text)
        return response.text
    else:
        print("Error : " + response.text)

