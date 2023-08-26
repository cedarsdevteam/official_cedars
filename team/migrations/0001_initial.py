# Generated by Django 4.1.1 on 2023-08-25 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="OurBoard",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, verbose_name="FullName")),
                ("position", models.CharField(max_length=200)),
                ("picture", models.ImageField(upload_to="Boardmembers")),
                ("x_link", models.CharField(max_length=500, verbose_name="X Profile")),
                (
                    "Linkedin_link",
                    models.CharField(max_length=500, verbose_name="Linkedin Profile"),
                ),
                ("publish", models.BooleanField(default=False)),
            ],
            options={
                "verbose_name_plural": "Board Members",
            },
        ),
    ]