from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ContentItemViewSet

router = DefaultRouter()
router.register("contentitem", ContentItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
