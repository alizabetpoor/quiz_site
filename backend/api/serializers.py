from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from quiz.models import Quiz
from question.models import Question
from answers.models import Answer

class QuizSerializer(ModelSerializer):
    class Meta:
        model=Quiz
        fields="__all__"

class QuestionSerializer(ModelSerializer):
    class Meta:
        model=Question
        fields="__all__"

class AnswerSerializer(ModelSerializer):
    class Meta:
        model=Answer
        fields="__all__"