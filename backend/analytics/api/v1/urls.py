from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserProgressViewSet

router = DefaultRouter()
router.register("userprogress", UserProgressViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
