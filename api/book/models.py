from django.db import models
from django.contrib.auth.models import User

from category.models import CategoryItem

import uuid


class BookItem(models.Model):
    uuid = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
    )

    name = models.CharField(
        max_length=256,
        unique=True,
        blank=False,
        null=False,
    )

    author = models.CharField(
        max_length=128,
        blank=False,
        null=False,
    )

    created = models.DateField(
        blank=False,
        null=False,
    )

    user = models.ForeignKey(
        User,
        unique=False,
        blank=False,
        null=True,
        on_delete=models.CASCADE,
    )

    category = models.ForeignKey(
        CategoryItem,
        unique=False,
        blank=False,
        null=False,
        on_delete=models.CASCADE,
    )
