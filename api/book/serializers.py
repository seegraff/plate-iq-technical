from rest_framework import serializers

from book.models import BookItem

from category.serializers import CategoryItemSerializer


class BookItemSerializer(serializers.ModelSerializer):
    category = CategoryItemSerializer()

    class Meta:
        model = BookItem
        fields = '__all__'
