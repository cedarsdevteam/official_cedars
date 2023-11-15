from django.db import models
from ckeditor.fields import RichTextField


class Contact(models.Model):
    sender = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    email = models.EmailField(blank=False)
    message = RichTextField(blank=False)
    contact_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Contact Form Response"

    def __str__(self):
        return self.sender


class NewsLetter(models.Model):
    email = models.EmailField(blank=False)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "News Letter"

    def __str__(self):
        return str(self.email)
    

class Category(models.Model):
    name = models.CharField(max_length=15, blank=True)
    
    def __str__(self):
        return str(self.name)   


class GetInvolve(models.Model):
    fullname = models.CharField(max_length=200, verbose_name='Full Name')
    email = models.EmailField(verbose_name="Email Address")
    phone = models.CharField(max_length=15, verbose_name="Phone Mobile")
    category = models.CharField(max_length=20, verbose_name="")
    

    class Meta:
        verbose_name_plural = "Involvement Request"
