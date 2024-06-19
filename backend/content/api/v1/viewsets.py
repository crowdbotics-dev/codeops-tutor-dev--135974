from rest_framework import authentication
from content.models import ContentItem
from .serializers import ContentItemSerializer
from rest_framework import viewsets


class ContentItemViewSet(viewsets.ModelViewSet):
    serializer_class = ContentItemSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ContentItem.objects.all()
