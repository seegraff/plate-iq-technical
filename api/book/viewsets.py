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

    def get_queryset(self):
        queryset = self.queryset

        name = self.request.query_params.get('name', None)
        author = self.request.query_params.get('author', None)
        category = self.request.query_params.get('category', None)
        fr = self.request.query_params.get('from', None)
        to = self.request.query_params.get('to', None)
        availability = self.request.query_params.get('availability', None)

        if name is not None:
            queryset = queryset.filter(name__icontains=name)

        if author is not None:
            queryset = queryset.filter(author__icontains=author)

        if category is not None:
            queryset = queryset.filter(category=category)

        if fr is not None:
            queryset = queryset.filter(published__gte=fr)

        if to is not None:
            queryset = queryset.filter(published__lte=to)

        if availability is not None:
            if availability == True or availability == 'true':
                queryset = queryset.filter(user__isnull=True)
            else:
                queryset = queryset.filter(user__isnull=False)

        return queryset

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
