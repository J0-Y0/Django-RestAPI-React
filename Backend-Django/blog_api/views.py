from blog.models import Post
from rest_framework import generics
from .serializer import PostSerializer
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
    BasePermission,
    SAFE_METHODS,
)


# a custom permission , only the post author can update and delete the post
class PostAuthorPermission(BasePermission):
    message = "Action restricted to post author only"

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user


# Provides get and post method hand
class PostList(generics.ListCreateAPIView):

    queryset = Post.postObject.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostAuthorPermission):
    permission_classes = [IsAuthenticatedOrReadOnly, PostAuthorPermission]

    queryset = Post.postObject.all()
    serializer_class = PostSerializer
