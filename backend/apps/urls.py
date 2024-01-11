# chat/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("<str:room_name>/", views.room, name="room"),
    path('gpt_answer/', views.GPTAnswerView.as_view(), name='gpt_answer'),
    path('generate_image/', views.ImageView.as_view(), name='generate_image'),
]