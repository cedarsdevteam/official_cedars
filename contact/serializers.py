from rest_framework import serializers
from .models import Contact, NewsLetter, GetInvolve

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['sender','subject','message','email']
        

class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = '__all__'

class GetInvolveSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetInvolve
        fields = '__all__'