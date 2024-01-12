# chat/urls.py
from django.urls import path

from .views import GPTAnswerView, ImageView

urlpatterns = [
    path('gpt_answer/', GPTAnswerView.as_view(), name='gpt_answer'),
    path('generate_image/', ImageView.as_view(), name='generate_image'),
]