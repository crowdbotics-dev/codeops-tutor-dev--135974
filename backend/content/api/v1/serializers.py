from rest_framework import serializers
from content.models import ContentItem


class ContentItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentItem
        fields = "__all__"
