from django.db import models
from ckeditor.fields import RichTextField



class Testimony(models.Model):
    name = models.CharField(max_length=150, blank=True)
    testimony = RichTextField(blank=False, null=True)
    position = models.CharField(max_length=150, blank=False)
    picture = models.ImageField(upload_to = 'testinomy/photos', blank=False)
    is_published = models.BooleanField(default=False)


    def __str__(self):
        return str(self.name)
    


class Achievement(models.Model):
    name = models.CharField(max_length=200, verbose_name="Course")
    brief = models.TextField()
    numbers = models.IntegerField()
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)