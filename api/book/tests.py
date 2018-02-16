from datetime import datetime

from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework import status

from django.contrib.auth.models import User
from django.urls import reverse

from category.models import CategoryItem

from book.models import BookItem


class BookItemTests(APITestCase):
    def setUp(self):
        # Init required prerequisite model instances
        self.user = User.objects.create(
            username='testuser', password='password1')
        self.category = CategoryItem.objects.create(
            name='Test', description='Test category 1')
        self.book = BookItem.objects.create(
            name='Test Book 1', author='J.C. Penny', category=self.category, created=datetime.now())

    def test_create_book(self):
        url = reverse('book-list')

        data = {
            'name': 'Test Book 2',
            'author': 'Book Author',
            'category': self.category.pk,
            'created': datetime.now(),
        }

        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(BookItem.objects.count(), 2)
        self.assertEqual(BookItem.objects.get(
            name='Test Book 2').name, 'Test Book 2')

# class BookItemTestCase(TestCase):
#     def setUp(self):
#         # Init required prerequisite model instances
#         self.user = User.objects.create(
#             username='testuser', password='password1')
#         self.category = CategoryItem.objects.create(
#             name='Test', description='Test category 1')
#         self.book = BookItem.objects.create(
#             name='Test Book 1', author='J.C. Penny', category=self.category, created=datetime.now())
#
#         # Setup API factory and its data
#         self.factory = APIRequestFactory()
#         self.path = '/api/v1/book/'
#         self.data = {
#             'name': 'Test Book 2',
#             'author': 'Author Booker',
#             'category': self.category.pk,
#             'created': datetime.now()
#         }
#
#     def test_create_book(self):
#         # Post create request
#         request = self.factory.post(self.path, self.data, format='json')
#
#         # Authenticate request with current user
#         force_authenticate(request, user=self.user)
#
#         # Assert request was successful
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#         # Get book instance from DB
#         book = BookItem.objects.filter(name=self.data['name'])
#
#         # Assert instance exists
#         self.assertTrue(book.exists())
#
#     def test_update_book(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#         # Store new book name
#         new_name = 'Test Book 1 - New name'
#
#         # Put update request
#         request = self.factory.put(
#             '%s/%s/' % (self.path, self.book.pk), {'name':  new_name})
#
#         # Assert request was successful
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#         # Get book instance from DB
#         book = BookItem.objects.filter(name=new_name)
#
#         # Assert instance exists with updated name
#         self.assertTrue(book.exists())
#
#     def test_delete_book(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#         # Get book instance from DB
#         book = BookItem.objects.filter(pk=self.book.pk)
#
#         # Assert instance exists
#         self.assertTrue(book.exists())
#
#         # Send delete request
#         request = self.factory.delete('%s/%s/' % (self.path, self.book.pk))
#
#         # Assert request was successful
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#         # Filter book instance in DB
#         book = BookItem.objects.filter(pk=self.book.pk)
#
#         # Assert instance does not exist
#         self.assertTrue(not book.exists())
#
#         # Recreate book if necessary
#         if not book.exists():
#             self.book = BookItem.objects.create(
#                 name='Test Book 1', author='J.C. Penny', category=self.category, created=datetime.now())
#
#     def test_retrieve_book(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#         # Send get request
#         request = self.factory.get('%s/%s/' % (self.path, self.book.pk))
#         response =
#
#         # Assert request was successful
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#
#
#     def test_list_books(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#     def test_list_books_pagination(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#     def test_list_books_with_filter(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#     def test_checkout_book(self):
#         # Refresh user from DB between tests
#         self.user.refresh_from_db()
#
#         # No need for a boolean, just check:
#         # book.user is Null ? 'Taken' : 'Available'
