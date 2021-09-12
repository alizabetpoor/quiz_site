from django.db import models
from quiz.models import Quiz
# Create your models here.
class Question(models.Model):
    title=models.CharField(max_length=500)
    created=models.DateTimeField(auto_now_add=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,related_name="questions")
    def __str__(self):
        return self.title