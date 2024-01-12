from django.urls import path
from .views import DiaryView

urlpatterns = [
    path('diaryStorage/<int:diary_id>/', DiaryView.as_view(), name='diary-detail'),
]
