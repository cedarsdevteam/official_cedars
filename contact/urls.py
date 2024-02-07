from django.urls import path
from .views import ContactFormView, NewsLetterView, GetInvolveView

urlpatterns = [
    path('contact/', ContactFormView.as_view(), name='contact-form'),
    path('newsletter/', NewsLetterView.as_view(), name='newsletter'),
    path('getinvolve/', GetInvolveView.as_view(), name="getinvolve")
]