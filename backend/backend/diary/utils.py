import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

# gpt한테 요약 요청
def generate_summary(content):
    content_str = "\n".join(content)
    summary_request = ('From now on, you will write child\'s diary instead of child. The content of diary must be the summarize of the conversation you had, with the child and write it as a diary. And the conditions of the diary are '
                       '1.It must be at least 160 characters and no more than 180 characters. '
                       '2. Each sentence in the diary should end with "~했다" or "~했어." '
                       '4.The child is of South Korean nationality.'
                       '5.Do not include a greeting in the summary.'
                       '6.The last sentence of the diary is "오늘의 일기 끝!".'
                       'Please follow these conditions when making a diary.'
                       )
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
        max_tokens=225,
    )
    return response.choices[0].message.content
# 달리 이미지 생성 로직보
# def generate_image(summary):
#
#     response = client.images.generate(
#
#         model="dall-e-3",
#         prompt=f'{summary}'
#                f'Please adhere to the following conditions: '
#                f'Draw the illustration based on the {summary} provided. '
#                f'Use seed number 3129831613. Do not arbitrarily change the prompt below, but use it as it is to create an image.Create an image that captures the essence of a drawing by a child, influenced by the uploaded reference. '
#                f'The artwork should mimic the style of the child-like sketch, complete with simplistic shapes, bright and unevenly applied colors, and the innocent charm of a child\'s artistry.',
#         size="1024x1024",
#         quality="standard",
#         n=1,
#         style="natural",
#     )
#     image_url = response.data[0].url
#     return image_url
