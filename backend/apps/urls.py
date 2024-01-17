# chat/urls.py
from django.urls import path

from .views import GPTAnswerView, ChatRoomCreateView, SpeechRecognitionView

urlpatterns = [

    path('gpt_answer/', GPTAnswerView.as_view(), name='gpt_answer'),
    path('create_chat_room/', ChatRoomCreateView.as_view(), name='create_chat_room'),
    path('celery/',SpeechRecognitionView.as_view(), name='celery'),
]