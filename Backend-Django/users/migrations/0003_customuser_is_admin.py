# Generated by Django 4.2.7 on 2024-06-07 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_alter_customuser_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="is_admin",
            field=models.BooleanField(default=False),
        ),
    ]
