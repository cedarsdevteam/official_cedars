from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static 
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path("admin/api/dashboard", admin.site.urls),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/docs/", SpectacularSwaggerView.as_view(url_name="schema")),
    path("", TemplateView.as_view(template_name = "index.html")),
    path('api/', include('contact.urls')),
    path('api/', include('testimonie.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
