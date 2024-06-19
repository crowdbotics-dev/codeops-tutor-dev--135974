from django.conf import settings
from django.db import models


class UserProgress(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="userprogress_user",
    )
    course = models.ForeignKey(
        "courses.Course",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="userprogress_course",
    )
    progress = models.IntegerField()
    last_accessed = models.DateTimeField(
        null=True,
        blank=True,
    )


# Create your models here.
