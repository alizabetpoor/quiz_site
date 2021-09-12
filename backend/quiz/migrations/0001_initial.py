# Generated by Django 3.2.6 on 2021-09-12 08:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120, verbose_name='نام کوییز')),
                ('time_quiz', models.IntegerField(validators=[django.core.validators.MaxValueValidator(180, 'زمان آزمون باید کمتر از 3 ساعت باشد'), django.core.validators.MinValueValidator(5, 'زمان آزمون باید بیشتر از 5 دقیقه باشد')], verbose_name='تایم آزمون(دقیقه)')),
                ('description', models.CharField(max_length=300, verbose_name='توضیح آزمون')),
                ('required_score', models.IntegerField(verbose_name='حداقل نمره برای قبولی(به درصد)')),
            ],
        ),
    ]