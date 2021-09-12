from django.db import models
from answers.models import Answer
# Create your models here.
class Question(models.Model):
    title=models.CharField(max_length=500)
    answers=models.ManyToManyField(Answer,related_name="question")