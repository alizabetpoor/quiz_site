from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from question.models import Question
# Create your models here.

class Quiz(models.Model):
    name=models.CharField(max_length=120,verbose_name="نام کوییز")
    time_quiz=models.IntegerField(validators=[MaxValueValidator(180,"زمان آزمون باید کمتر از 3 ساعت باشد"),
        MinValueValidator(5,"زمان آزمون باید بیشتر از 5 دقیقه باشد")],
        verbose_name="تایم آزمون(دقیقه)")
    description=models.CharField(max_length="300",verbose_name="توضیح آزمون")
    questions=models.ManyToManyField(Question,null=True,related_name="quiz")