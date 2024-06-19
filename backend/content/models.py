from django.conf import settings
from django.db import models


class ContentItem(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    type = models.CharField(
        max_length=50,
    )
    course = models.ForeignKey(
        "courses.Course",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="contentitem_course",
    )
    content = models.TextField()


# Create your models here.
