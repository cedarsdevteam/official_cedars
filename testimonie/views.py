from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Testimony
from .serializers import TestimonySerializer

class TestimonyListView(APIView):
    serializer_class = TestimonySerializer
    def get(self, request, format=None):
        testimonies = Testimony.objects.filter(is_published=True)
        serializer = TestimonySerializer(testimonies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)