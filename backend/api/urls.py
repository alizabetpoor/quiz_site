from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import QuizViewsets,QuestionsView,AnswersView,ResultViewsets

router=SimpleRouter()

router.register('quiz',QuizViewsets,basename="quiz")
router.register('result',ResultViewsets,basename="result")

urlpatterns=router.urls

urlpatterns += [
    path("questions/<int:quizid>/",QuestionsView.as_view()),
    path("answers/<int:questionid>/",AnswersView.as_view()),
]
