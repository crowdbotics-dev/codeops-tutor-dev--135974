from rest_framework import authentication
from courses.models import Course, Certification
from .serializers import CertificationSerializer, CourseSerializer
from rest_framework import viewsets


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Course.objects.all()


class CertificationViewSet(viewsets.ModelViewSet):
    serializer_class = CertificationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Certification.objects.all()
