import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

# gpt한테 요약 요청
def generate_summary(content):
    content_str = "\n".join(content)
    summary_request = ('You have to write a picture diary based on the conversation. It\'s going to be in your child\'s picture diary. Please write 180 characters or less. And you only speak in Korean')
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": summary_request
            },
            {
                "role": "user",
                "content": content_str
            },
        ],
    )
    return response.choices[0].message.content
# 달리 이미지 생성 로직보
def generate_image(summary):

    response = client.images.generate(
        model="dall-e-3",
        prompt=summary,
        size="1024x1024",
        quality="standard",
        n=1,
        style="natural",
    )
    image_url = response.data[0].url
    return image_url
