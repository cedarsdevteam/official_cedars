from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=250)
    start_date = models.DateTimeField(editable=False, auto_now_add = True)
    end_date = models.DateTimeField()
    photo = models.ImageField(upload_to='Courses')
    description = models.TextField()
    registration_link = models.URLField(max_length=300, blank=True)
    is_publish = models.BooleanField(default=False)

    def __str__(self):
        return self.name