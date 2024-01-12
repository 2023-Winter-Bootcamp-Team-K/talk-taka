from django.urls import path
from .views import DiaryView, DiaryListView, DiaryDeleteView

urlpatterns = [
    path('diaryStorage/<int:diary_id>/', DiaryView.as_view(), name='diary'),
    path('diaryStorage/', DiaryListView.as_view(), name='diary-list'),
    path('delete/<int:pk>/', DiaryDeleteView.as_view(), name='delete-diary'),

]
