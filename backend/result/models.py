from django.db import models
from django.contrib.auth.models import User
from quiz.models import Quiz
# Create your models here.
class Result(models.Model):
    contributor=models.ForeignKey(User,related_name="result")
    quiz=models.ForeignKey()
    score=models.IntegerField(verbose_name="نتیجه آزمون(درصد)")