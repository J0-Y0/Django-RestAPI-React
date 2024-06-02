from blog.models import Post
from rest_framework import generics
from .serializer import PostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, BasePermission


class PostUpdateDeletePermissions(BasePermission):

    message = "updating post is restricted to the author only "


# Provides get and post method hand
class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.postObject.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.postObject.all()
    serializer_class = PostSerializer
