from rest_framework.views import APIView
from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework import status
from .models import Testimony, Achievement
from .serializers import TestimonySerializer, AchievementSerializer


@extend_schema(
    request=TestimonySerializer,
    responses={status.HTTP_200_OK: TestimonySerializer(many=True)},
    description="This endpoint is for all collect and documented beneficiaries testiminies",
    tags=["Testimonies"],
)
class TestimonyListView(APIView):
    serializer_class = TestimonySerializer
    def get(self, request, format=None):
        testimonies = Testimony.objects.filter(is_published=True)
        serializer = TestimonySerializer(testimonies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@extend_schema(
    request=AchievementSerializer,
    responses={status.HTTP_200_OK: AchievementSerializer(many=True)},
    description="This endpoint contains individual achievement on all our trainings",
    tags=["Achievement"],
)   
class AchievementListView(APIView):
    serializer_class = AchievementSerializer
    def get(self, request, format=None):
        achievement = Achievement.objects.filter(is_published=True)
        serializer = AchievementSerializer(achievement, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)