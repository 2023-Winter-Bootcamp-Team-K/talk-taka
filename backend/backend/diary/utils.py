import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

# gpt한테 요약 요청
def generate_summary(content):
    content_str = "\n".join(content)
    summary_request = ('When the conversation is over, summarize the conversation into 180 characters in maximum and write the contents of the child\'s drawing diary in Korean. Write it using a literacy style, and do not include the last conversation in the diary.')
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
        prompt=f'{summary}Please generate a cute and lovely illustration based on this summary, using seed number 3096745504. The illustration should be a fairytale illustration suitable for a child\'s picture diary, ages 4 to 6. If there are people in the drawing, please depict them with a light apricot-colored skin tone (#fdece2) and draw black or dark brown hair. Exclude any text and provide only the illustration.',
        size="1024x1024",
        quality="standard",
        n=1,
        style="natural",
    )
    image_url = response.data[0].url
    return image_url
