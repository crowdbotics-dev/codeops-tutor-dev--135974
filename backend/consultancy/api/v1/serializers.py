from rest_framework import serializers
from consultancy.models import ConsultancySession


class ConsultancySessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultancySession
        fields = "__all__"
