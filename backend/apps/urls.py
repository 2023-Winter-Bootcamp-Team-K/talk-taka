# chat/urls.py
from django.urls import path

from .views import GPTAnswerView, ChatRoomCreateView

urlpatterns = [

    path('gpt_answer/', GPTAnswerView.as_view(), name='gpt_answer'),
    path('create_chat_room/', ChatRoomCreateView.as_view(), name='create_chat_room'),
]