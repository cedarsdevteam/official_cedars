from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact, NewsLetter
from .serializers import ContactSerializer, NewsLetterSerializer

class ContactFormView(APIView):
    serializer_class = ContactSerializer
    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class NewsLetterView(APIView):
    serializer_class = NewsLetterSerializer

    def post(self, request, format=None):
        serializer = NewsLetterSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            if NewsLetter.objects.filter(email=email).exists():
                # If the email already exists, send a response with 409 Conflict status code
                return Response({'detail': 'Email already exists.'}, status=status.HTTP_409_CONFLICT)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)