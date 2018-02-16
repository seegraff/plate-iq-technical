from rest_framework import serializers

from book.models import BookItem


class BookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookItem
        fields = '__all__'
