from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CertificationViewSet, CourseViewSet

router = DefaultRouter()
router.register("course", CourseViewSet)
router.register("certification", CertificationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
