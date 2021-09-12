from django.db import models
from django.contrib.auth.models import User
from quiz.models import Quiz
# Create your models here.
class Result(models.Model):
    contributor=models.ForeignKey(User,on_delete=models.CASCADE,related_name="results")
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,related_name="results")
    score=models.FloatField(verbose_name="نتیجه آزمون(درصد)")

    def __str__(self):
        return self.pk