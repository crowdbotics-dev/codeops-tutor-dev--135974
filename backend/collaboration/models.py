from django.conf import settings
from django.db import models


class Event(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    location = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )


# Create your models here.
