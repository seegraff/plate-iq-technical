from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import status

from book.serializers import BookItemSerializer
from book.models import BookItem


class BookItemViewSet(viewsets.ModelViewSet):
    queryset = BookItem.objects.all()
    serializer_class = BookItemSerializer

    @detail_route(methods=['get'], url_name='checkout', url_path='checkout')
    def checkout_book(self, request, pk=None):
        queryset = BookItem.objects.all()
        book = get_object_or_404(queryset, pk=pk)
        user = request.user

        book.user = user
        book.save()

        serializer = BookItemSerializer(book)
        return Response(serializer.data)

    @detail_route(methods=['get'], url_name='return', url_path='return')
    def return_book(self, request, pk=None):
        queryset = BookItem.objects.all()
        book = get_object_or_404(queryset, pk=pk)
        user = request.user

        if book.user == user:
            book.user = None
            book.save()

            serializer = BookItemSerializer(book)
            result = Response(serializer.data)
        else:
            result = Response('Cannot return book from user that has not checked it out', status=status.HTTP_403_FORBIDDEN)

        return result
