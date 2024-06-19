from rest_framework import serializers
from analytics.models import UserProgress


class UserProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgress
        fields = "__all__"
