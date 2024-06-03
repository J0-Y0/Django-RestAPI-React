from django.urls import path, include
from .views import PostList, PostDetail, customUserRegister
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("", PostList.as_view(), name="listcreate"),
    path("<int:pk>", PostDetail.as_view(), name="postdetail"),
    path("signup", customUserRegister.as_view(), name="signup"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
