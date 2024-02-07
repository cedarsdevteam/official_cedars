from django.shortcuts import render
from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course
from .serializers import CourseSerializer


@extend_schema(
    request=CourseSerializer,
    responses={status.HTTP_200_OK: CourseSerializer(many=True)},
    description="This is the endpoint of all our available/current programs",
    tags=["Courses"],
)
class CoursesView(APIView):
    serializer_class = CourseSerializer

    def get(self, request, format=None):
        courses = Course.objects.filter(is_published=True)
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
