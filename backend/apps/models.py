from django.db import models

from users.models import User


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
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,db_column="user_id")  # 모델의 1:N 관계를 나타내기 위해 사용
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    delete_at = models.DateTimeField(null=True)

    def add_mood(self, mood):
        if mood == 'Joy':
            self.mood = self.JOY
        elif mood == 'Sad':
            self.mood = self.SAD
        elif mood == 'Angry':
            self.mood = self.ANGRY
        self.save()


class GPTQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    chatroom_id = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField(null=True)
    delete_at = models.DateTimeField(null=True)

class UserAnswer(models.Model):
    id = models.AutoField(primary_key=True)
    question_id = models.ForeignKey(GPTQuestion, on_delete=models.CASCADE)
    content = models.TextField()
    audio_url = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField()
    delete_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)
