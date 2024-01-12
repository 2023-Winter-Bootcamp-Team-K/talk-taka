# chat/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path('gpt_answer/', views.GPTAnswerView.as_view(), name='gpt_answer'),
    path('generate_image/', views.ImageView.as_view(), name='generate_image'),
    path('create_chat_room/', views.ChatRoomCreateView.as_view(), name='create_chat_room'),
]