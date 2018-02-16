from rest_framework import viewsets, mixins

from category.serializers import CategoryItemSerializer
from category.models import CategoryItem


class CategoryItemViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = CategoryItem.objects.all()
    serializer_class = CategoryItemSerializer
