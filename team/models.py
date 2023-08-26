from django.db import models

class BoardMember(models.Model):
    name = models.CharField(max_length=200, verbose_name="FullName")
    position = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='Boardmembers')
    x_link = models.CharField(max_length=500, verbose_name="X Profile")
    Linkedin_link = models.CharField(max_length=500, verbose_name="Linkedin Profile")
    publish = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Board Members"

    def __str__(self):
        return self.name
