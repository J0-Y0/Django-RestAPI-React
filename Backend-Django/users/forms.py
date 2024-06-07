# from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# from .models import CustomUser


# class UserCreationForm(UserCreationForm):
#     """A form for creating new users. Includes all the required
#     fields, plus a repeated password."""

#     class Meta:
#         model = CustomUser
#         fields = [
#             "first_name",
#             "last_name",
#             "email",
#         ]


# class UserChangeForm(UserChangeForm):
#     """A form for updating users. Includes all the fields on
#     the user, but replaces the password field with admin's
#     disabled password hash display field.
#     """

#     # password = ReadOnlyPasswordHashField()

#     class Meta:
#         model = CustomUser
#         fields = "__all__"
