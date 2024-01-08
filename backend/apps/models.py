from django.db import models

from django.db import models
class Member(models.Model):
    id = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=250)
    gender = models.CharField(max_length=1)
    datetime = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    delete_at = models.DateTimeField(null=True)
    profile_img = models.CharField(max_length=500, null=True)

class ChatRoom(models.Model):
    id = models.AutoField(primary_key=True)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    mood = models.IntegerField(choices=[(0, '기쁨'), (1, '슬픔'), (2, '화남')])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    delete_at = models.DateTimeField(null=True)

class GptQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    delete_at = models.DateTimeField(null=True)

class Diary(models.Model):
    id = models.AutoField(primary_key=True)
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    content = models.TextField()
    image_url = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)

class UserAnswer(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.ForeignKey(GptQuestion, on_delete=models.CASCADE)
    content = models.TextField()
    audio_url = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    delete_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(auto_now=True)