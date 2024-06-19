from rest_framework import authentication
from collaboration.models import Event
from .serializers import EventSerializer
from rest_framework import viewsets


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Event.objects.all()
