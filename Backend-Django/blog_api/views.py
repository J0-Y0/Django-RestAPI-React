from blog.models import Post
from rest_framework import generics
from .serializer import PostSerializer


# Provides get and post method hand
class PostList(generics.ListCreateAPIView):
    queryset = Post.postObject.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.postObject.all()
    serializer_class = PostSerializer
