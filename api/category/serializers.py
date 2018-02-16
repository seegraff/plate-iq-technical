from rest_framework import serializers

from category.models import CategoryItem


class CategoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryItem
        fields = '__all__'
