from django.urls import path, include
from .views import PostList, PostDetail

urlpatterns = [
    path("", PostList.as_view(), name="listcreate"),
    path("<int:pk>", PostDetail.as_view(), name="postdetail"),
    path("api-auth/", include("rest_framework.urls")),
]
