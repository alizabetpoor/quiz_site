from django.db import models
from question.models import Question
# Create your models here.

class Answer(models.Model):
    title=models.CharField(max_length=300,verbose_name="جواب")
    correct=models.BooleanField(verbose_name="جواب درست",default=False)
    question=models.ForeignKey(Question,on_delete=models.CASCADE,related_name="answers")

    def __str__(self):
        return self.title
