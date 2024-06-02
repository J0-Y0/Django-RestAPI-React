from django.db import models

# from django.contrib.auth.models import User
from users.models import CustomUser
from django.utils import timezone

# from django.conf import settings


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    options = (("published", "Published"), ("draft", "Draft"))

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField()
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date="published")
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=options, default="published")

    objects = models.Manager()  # default manager
    postObject = PostObjects()  # custom manager -- only published posts

    class Meta:
        ordering = ("-published",)

    def __str__(self):
        return self.title
