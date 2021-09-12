from django.db import models

# Create your models here.

class Answer(models.Model):
    title=models.CharField(max_length=300,verbose_name="جواب")
    correct=models.BooleanField(verbose_name="جواب درست",default=False)
