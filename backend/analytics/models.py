from django.conf import settings
from django.db import models


class UserProgress(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="userprogress_user",
    )
    course = models.ForeignKey(
        "courses.Course",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="userprogress_course",
    )
    progress = models.IntegerField()
    last_accessed = models.DateTimeField(
        null=True,
        blank=True,
    )


# Create your models here.
