from django.db import models

from users.models import User
from time import timezone

class ChatRoom(models.Model):
    JOY = 'joy'
    SAD = 'sad'
    ANGRY = 'angry'

    MOOD_CHOICES = [
        (JOY, 'Joy'),
        (SAD, 'Sad'),
        (ANGRY, 'Angry'),
    ]
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user_id")  # 모델의 1:N 관계를 나타내기 위해 사용
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    delete_at = models.DateTimeField(null=True)
    summary = models.CharField(max_length=300, null=True)
    image_url = models.CharField(null=True, blank=True, max_length=500)  # 채팅방 이미지 URL 필드 추가


    def add_mood(self, mood):
        if mood == 'Joy':
            self.mood = self.JOY
        elif mood == 'Sad':
            self.mood = self.SAD
        elif mood == 'Angry':
            self.mood = self.ANGRY
        self.save()

    def get_conversation(self):
        # ChatRoom과 관련된 GPTQuestion 객체들과 UserAnswer 객체들을 가져옴
        questions = GPTQuestion.objects.filter(chatroom_id=self.id)
        answers = UserAnswer.objects.filter(question_id__chatroom_id=self.id)
        # 여기서 question_id__chatroom_id는 UserAnswer의 question_id 외래키를 통해 ChatRoom에 접근함을 의미

        # 대화 내용을 시간 순서대로 정렬하여 반환
        conversation = list(questions) + list(answers)
        conversation.sort(key=lambda x: x.created_at)  # created_at은 각 객체의 생성 시간 필드
        return [item.content for item in conversation]


class GPTQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    chatroom_id = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    delete_at = models.DateTimeField(null=True)


class UserAnswer(models.Model):
    id = models.AutoField(primary_key=True)
    question_id = models.ForeignKey(GPTQuestion, on_delete=models.CASCADE)
    content = models.TextField()
    audio_url = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    delete_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)

