from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView


urlpatterns = [
    path("admin/", admin.site.urls),
<<<<<<< HEAD
    path("", TemplateView.as_view(template_name = "index.html")),
=======
    path("", TemplateView.as_view(template_name = "index.html"),
>>>>>>> c42230bed76867004c2a2f4781251d4228d1d065
]
