# from django.shortcuts import render
from blog.models import Post
from rest_framework import generics
from .serializer import PostSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.postObject.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
