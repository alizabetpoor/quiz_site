from .serializers import (
    QuizSerializer,
    QuestionSerializer,
    AnswerSerializer,
    ResultSerializer
)
from quiz.models import Quiz
from rest_framework.response import Response
from rest_framework import status
from question.models import Question
from answers.models import Answer
from result.models import Result
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
# Create your views here.

class QuizViewsets(viewsets.ModelViewSet):
    queryset=Quiz.objects.all()
    serializer_class=QuizSerializer

class QuestionsView(ListAPIView):
    serializer_class=QuestionSerializer
    def get_queryset(self):
        id=self.kwargs.get("quizid")
        questions=Question.objects.filter(quiz=id)
        return questions
        
    def list(self, request,*args,**kwargs):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        if len(queryset)==0:
            return Response("کوییز وجود ندارد",status=status.HTTP_404_NOT_FOUND)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)
    
class AnswersView(ListAPIView):
    serializer_class=AnswerSerializer
    def get_queryset(self):
        id=self.kwargs.get("questionid")
        answers=Answer.objects.filter(question=id)
        return answers

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if len(queryset)==0:
            return Response("این سوال وجود ندارد",status=status.HTTP_404_NOT_FOUND)
        serializer = AnswerSerializer(queryset,many=True)
        return Response(serializer.data)

class ResultViewsets(viewsets.ModelViewSet):
    queryset=Result.objects.all()
    serializer_class=ResultSerializer