from rest_framework import authentication
from consultancy.models import ConsultancySession
from .serializers import ConsultancySessionSerializer
from rest_framework import viewsets


class ConsultancySessionViewSet(viewsets.ModelViewSet):
    serializer_class = ConsultancySessionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ConsultancySession.objects.all()
