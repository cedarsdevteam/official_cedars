from django.urls import path
from .views import TestimonyListView

urlpatterns = [
    path('testimonies/', TestimonyListView.as_view(), name='testimony-list')
]