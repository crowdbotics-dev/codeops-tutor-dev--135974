from django.conf import settings
from django.db import models


class Course(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    category = models.CharField(
        max_length=255,
    )
    skill_level = models.CharField(
        max_length=50,
    )
    instructor = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="courses_taught",
    )


class Certification(models.Model):
    "Generated Model"
    course = models.ForeignKey(
        "courses.Course",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="certification_course",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="certification_user",
    )
    date_issued = models.DateField(
        null=False,
        blank=False,
    )


# Create your models here.
