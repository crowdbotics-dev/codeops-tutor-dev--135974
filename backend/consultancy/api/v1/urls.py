from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ConsultancySessionViewSet

router = DefaultRouter()
router.register("consultancysession", ConsultancySessionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
