from blog.models import Post
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializer import PostSerializer, CustomUserSerializer

from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly,
    BasePermission,
    AllowAny,
    SAFE_METHODS,
)


class customUserRegister(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer


# class customUserRegister(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request, format="json"):
#         serializer = CustomUserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# a custom permission , only the post author can update and delete the post
class PostAuthorPermission(BasePermission):
    message = "Action restricted to post author only"

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user


# Provides get and post method hand
class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.postObject.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostAuthorPermission):
    permission_classes = [IsAuthenticatedOrReadOnly, PostAuthorPermission]

    queryset = Post.postObject.all()
    serializer_class = PostSerializer

    """
Concrete View Classes
The following classes are the concrete generic views. If you're using generic views this is normally the level you'll be working at unless you need heavily customized behavior.

The view classes can be imported from rest_framework.generics.

CreateAPIView
Used for create-only endpoints.

Provides a post method handler.

Extends: GenericAPIView, CreateModelMixin

ListAPIView
Used for read-only endpoints to represent a collection of model instances.

Provides a get method handler.

Extends: GenericAPIView, ListModelMixin

RetrieveAPIView
Used for read-only endpoints to represent a single model instance.

Provides a get method handler.

Extends: GenericAPIView, RetrieveModelMixin

DestroyAPIView
Used for delete-only endpoints for a single model instance.

Provides a delete method handler.

Extends: GenericAPIView, DestroyModelMixin

UpdateAPIView
Used for update-only endpoints for a single model instance.

Provides put and patch method handlers.

Extends: GenericAPIView, UpdateModelMixin

ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.

Provides get and post method handlers.

Extends: GenericAPIView, ListModelMixin, CreateModelMixin

RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.

Provides get, put and patch method handlers.

Extends: GenericAPIView, RetrieveModelMixin, UpdateModelMixin

RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.

Provides get and delete method handlers.

Extends: GenericAPIView, RetrieveModelMixin, DestroyModelMixin

RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.

Provides get, put, patch and delete method handlers.

Extends: GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
    
    """
