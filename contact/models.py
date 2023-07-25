from django.db import models
from ckeditor.fields import RichTextField


class Contact(models.Model):
    sender = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    email = models.EmailField(blank=False)
    message = RichTextField(blank=False)

    class Meta:
        verbose_name_plural = "Contact Form Response"

    def __str__(self):
        return str(self.sender)


class NewsLetter(models.Model):
    email = models.EmailField(blank=False)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "News Letter"

    def __str__(self):
        return str(self.email)
