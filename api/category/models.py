from django.db import models

import uuid


class Category(models.Model):
    uuid = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
    )

    name = models.CharField(
        max_length=128,
        unique=True,
        blank=False,
        null=False,
    )

    description = models.TextField(
        blank=False,
        null=False,
    )

    created = models.DateField(
        auto_now_add=True,
    )
