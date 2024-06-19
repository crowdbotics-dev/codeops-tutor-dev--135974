from django.conf import settings
from django.db import models


class ConsultancySession(models.Model):
    "Generated Model"
    topic = models.CharField(
        max_length=255,
    )
    consultant = models.ForeignKey(
        "users.User",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="consultancy_sessions",
    )
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    duration = models.IntegerField()
    company = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )


# Create your models here.
