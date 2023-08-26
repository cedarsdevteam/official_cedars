from django.urls import path
from .views import TestimonyListView, AchievementListView

urlpatterns = [
    path('testimonies/', TestimonyListView.as_view(), name='testimony-list'),
    path('achievement/', AchievementListView.as_view(), name="achievement"),
]