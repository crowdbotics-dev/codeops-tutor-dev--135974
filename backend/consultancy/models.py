from django.conf import settings
from django.db import models


class ConsultancySession(models.Model):
    "Generated Model"
    topic = models.CharField(
        max_length=255,
    )
    consultant = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="consultancy_sessions",
    )
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    duration = models.IntegerField()
    company = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )


# Create your models here.
