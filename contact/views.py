from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact, NewsLetter, GetInvolve
from .serializers import ContactSerializer, NewsLetterSerializer, GetInvolveSerializer



@extend_schema(
    request=ContactSerializer,
    responses={status.HTTP_201_CREATED: ContactSerializer},
    description="This is the contact form, this form is means for people to reach out to us",
    tags=["Contact"],
)
class ContactFormView(APIView):
    serializer_class = ContactSerializer
    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(
    request=NewsLetterSerializer,
    responses={status.HTTP_201_CREATED: NewsLetterSerializer},
    description="This is the newsletter signup form, this form is to get the email of those who which to signup for our newslatter",
    tags=["Contact"],
)

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


@extend_schema(
    request=GetInvolveSerializer,
    responses={status.HTTP_201_CREATED: GetInvolveSerializer},
    description="This is the get-involve signup form, this form is to get the email of those who which to be part of cedars either as a partner, contributor or volunteer",
    tags=["GetInvolve"],
)

class GetInvolveView(APIView):
    serializer_class = GetInvolveSerializer

    def post(self, request, format=None):
        serializer = GetInvolveSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            if NewsLetter.objects.filter(email=email).exists():
                # If the email already exists, send a response with 409 Conflict status code
                return Response({'detail': 'Email already exists.'}, status=status.HTTP_409_CONFLICT)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)