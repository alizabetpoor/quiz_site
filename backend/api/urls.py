from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import QuizViewsets,QuestionsView,AnswersView

router=SimpleRouter()

router.register('quiz',QuizViewsets,basename="quiz")


urlpatterns=router.urls

urlpatterns += [
    path("questions/<int:quizid>/",QuestionsView.as_view()),
    path("answers/<int:questionid>/",AnswersView.as_view()),
]
