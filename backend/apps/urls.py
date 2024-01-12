# chat/urls.py
from django.urls import path

from .views import GPTAnswerView, ImageView

urlpatterns = [
<<<<<<< HEAD
    path('gpt_answer/', views.GPTAnswerView.as_view(), name='gpt_answer'),
    path('generate_image/', views.ImageView.as_view(), name='generate_image'),
    path('create_chat_room/', views.ChatRoomCreateView.as_view(), name='create_chat_room'),
=======
    path('gpt_answer/', GPTAnswerView.as_view(), name='gpt_answer'),
    path('generate_image/', ImageView.as_view(), name='generate_image'),
>>>>>>> develop
]