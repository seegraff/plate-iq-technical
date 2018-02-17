from rest_framework import serializers

from book.models import BookItem

from category.models import CategoryItem
from category.serializers import CategoryItemSerializer


class BookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookItem
        fields = (
            'uuid',
            'name',
            'author',
            'published',
            'user',
            'category',
            'created'
        )
        depth = 2


class BookItemCreateSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        queryset=CategoryItem.objects.all(), many=False)

    class Meta:
        model = BookItem
        fields = (
            'uuid',
            'name',
            'author',
            'published',
            'user',
            'category',
            'created'
        )
