from django.contrib import admin
from .models import Answer
# Register your models here.

class AnswerAdmin(admin.ModelAdmin):
    list_display=["title","question","correct"]

admin.site.register(Answer,AnswerAdmin)