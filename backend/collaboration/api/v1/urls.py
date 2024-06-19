from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EventViewSet

router = DefaultRouter()
router.register("event", EventViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
