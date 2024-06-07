from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import GroupAdmin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.utils.translation import gettext_lazy as _
from .models import CustomUser


class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ["email", "first_name", "last_name", "is_active"]
    list_filter = ["is_active", "is_staff", "is_superuser"]
    fieldsets = [
        ("Personal info", {"fields": ["first_name", "last_name", "email", "about"]}),
        ("Change Password", {"fields": ["password"]}),
        (
            "User type",
            {
                "fields": [
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ]
            },
        ),
        (_("Permissions"), {"fields": ["groups", "user_permissions"]}),
    ]

    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        ("Personal info", {"fields": ["first_name", "last_name", "email"]}),
        ("Authentication", {"fields": ["password1", "password2"]}),
        (
            "User type",
            {
                "fields": [
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ]
            },
        ),
        ("Permissions", {"fields": ["groups", "user_permissions"]}),
    ]

    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = ["user_permissions", "groups"]


admin.site.register(CustomUser, UserAdmin)
