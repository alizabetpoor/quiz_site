from rest_framework.serializers import ModelSerializer
from quiz.models import Quiz
from question.models import Question
from result.models import Result
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

class ResultSerializer(ModelSerializer):
    class Meta:
        model = Result
        fields = "__all__"