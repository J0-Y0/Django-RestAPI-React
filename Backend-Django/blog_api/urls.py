from django.urls import path, include
from .views import PostList, customUserRegister
from rest_framework_simplejwt.views import TokenVerifyView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework import routers


urlpatterns = [
    path("signup", customUserRegister.as_view(), name="signup"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

router = routers.SimpleRouter()
router.register("posts", PostList, basename="post")
urlpatterns += router.urls
