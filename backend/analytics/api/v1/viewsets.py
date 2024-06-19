from rest_framework import authentication
from analytics.models import UserProgress
from .serializers import UserProgressSerializer
from rest_framework import viewsets


class UserProgressViewSet(viewsets.ModelViewSet):
    serializer_class = UserProgressSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserProgress.objects.all()
