

from rest_framework import serializers
from .models import ChatRoom
from .models import GPTQuestion, UserAnswer

class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = []

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GPTQuestion
        fields = ['id', 'content']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnswer
        fields = ['id', 'question', 'content']
