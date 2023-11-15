from rest_framework import serializers
from .models import Contact, NewsLetter

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['sender','subject','message','email']
        

class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = '__all__'