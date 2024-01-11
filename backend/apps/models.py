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
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # member를 user로 변경
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField(null=True)
    delete_at = models.DateTimeField(null=True)


class GPTQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField(null=True)
    delete_at = models.DateTimeField(null=True)

class UserAnswer(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.ForeignKey(GPTQuestion, on_delete=models.CASCADE)
    content = models.TextField()
    audio_url = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField()
    delete_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)
