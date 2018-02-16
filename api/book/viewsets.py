from rest_framework import viewsets

from book.serializers import BookItemSerializer
from book.models import BookItem


class BookItemViewSet(viewsets.ModelViewSet):
    queryset = BookItem.objects.all()
    serializer_class = BookItemSerializer
