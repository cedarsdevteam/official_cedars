from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView


urlpatterns = [
    path("admin/", admin.site.urls),
<<<<<<< HEAD
    path("", TemplateView.as_view(template_name = "index.html"))
=======
    path("", TemplateView.as_view(template_name = "index.html")),
>>>>>>> 3926c271d845b4dfd2d53e2dba9362507af87c39
]
