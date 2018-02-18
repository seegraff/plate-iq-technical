from rest_framework import serializers

from book.models import BookItem

from category.models import CategoryItem
from category.serializers import CategoryItemSerializer


class BookItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(many=False, required=True, queryset=CategoryItem.objects.all())

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

    def to_representation(self, instance):
        result = super(BookItemSerializer, self).to_representation(instance)

        if instance.category:
            category_uuid = instance.category.uuid
            category = CategoryItem.objects.get(uuid=category_uuid)
            result['category'] = {
                'uuid': category.uuid,
                'name': category.name,
                'description': category.description,
                'created': category.created
            }

        return result
