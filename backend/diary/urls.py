from django.urls import path
from .views import DiaryView, DiaryListView, DiaryCreateView, DiaryDeleteView

urlpatterns = [
    path('diaries/', DiaryListView.as_view(), name='diary-list'),  # 일기 전체 조회
    path('', DiaryCreateView.as_view(), name='create-diary'),  # 일기 생성
    path('<int:pk>/', DiaryView.as_view(), name='diary-detail'),  # 일기 단일 조회
    path('<int:pk>/delete/', DiaryDeleteView.as_view(), name='delete-diary'),  # 일기 삭제
]
