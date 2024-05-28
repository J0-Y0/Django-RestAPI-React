from django.contrib import admin
from .models import *


class postAdmin(admin.ModelAdmin):
    list_display = ("title", "id", "status", "author", "published")


admin.site.register(Category)
admin.site.register(Post, postAdmin)
# Register your models here.
