from rest_framework import serializers
from blog.models import Post
from users.models import CustomUser


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["title", "author", "excerpt", "content", "status"]


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "email",
            "first_name",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):

        user = CustomUser(
            email=validated_data["email"], first_name=validated_data["first_name"]
        )

        user.set_password(validated_data["password"])
        user.save()
        return user
