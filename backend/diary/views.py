from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Diary
from django.http import Http404

class DiaryView(APIView):
    """
    일기 상세 조회 API
    GET: /diaryStorage/{diary_id}
    """
    def get_object(self, diary_id):
        try:
            return Diary.objects.get(pk=diary_id)
        except Diary.DoesNotExist:
            raise Http404

    def get(self, request, diary_id, format=None):
        diary = self.get_object(diary_id)
        diary_data = {
            "status": "200",
            "message": "일기 조회 성공",
            "diaryContent": diary.content,
            "created_at": diary.created_at.strftime("%Y-%m-%d"),
            "imageURL": diary.img_url
        }
        return Response(diary_data)
