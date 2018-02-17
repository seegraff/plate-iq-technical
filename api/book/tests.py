from rest_framework.test import APITestCase
from rest_framework import status

from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone

from category.models import CategoryItem

from book.models import BookItem


class BookItemTests(APITestCase):
    def setUp(self):
        # Init required prerequisite model instances
        self.user = User.objects.create(
            username='testuser', password='password1')
        self.category = CategoryItem.objects.create(
            name='Book Test Category', description='Test category for books')
        self.book = BookItem.objects.create(
            name='Test Book 1', author='J.C. Penny', category=self.category, published=timezone.now().date())

        # Force authentication for user in all requests
        self.client.force_authenticate(user=self.user)

    def test_create_book(self):
        # Get url for list/create
        url = reverse('bookitem-list')

        # Define data
        data = {
            'name': 'Test Book 2',
            'author': 'Book Author',
            'category': self.category.uuid,
            'published': timezone.now().date(),
        }

        # Post to url with data
        response = self.client.post(url, data, format='json')

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(BookItem.objects.count(), 2)
        self.assertEqual(BookItem.objects.get(
            name='Test Book 2').name, 'Test Book 2')

    def test_delete_book(self):
        # Get url for delete
        url = reverse('bookitem-detail', args=[self.book.pk])

        # Delete to url
        response = self.client.delete(url)

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(BookItem.objects.filter(name=self.book.name).exists(), False)

        # Recreate book instance for remaining tests
        self.book = BookItem.objects.create(
            name='Test Book 1', author='J.C. Penny', category=self.category, published=timezone.now().date())

    def test_update_book(self):
        # Get url for update
        url = reverse('bookitem-detail', args=[self.book.pk])

        # Define data to update
        data = {
            'name': 'Test Book 1 - A New Name',
        }

        # Patch to url with data
        response = self.client.patch(url, data, format='json')

        # Update local data
        self.book = BookItem.objects.get(pk=self.book.pk)

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.book.name, data['name'])

    def test_retrieve_book(self):
        # Get url for retrieve
        url = reverse('bookitem-detail', args=[self.book.pk])

        # Get to url
        response = self.client.get(url)

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.book.name, response.data['name'])

    def test_list_books(self):
        # Get url for list
        url = reverse('bookitem-list')

        # Get to url
        response = self.client.get('%s?%s=%s' % (url, 'limit', 0))

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(BookItem.objects.count(), len(response.data['results']))

    def test_list_books_with_pagination(self):
        # Get url for list
        url = reverse('bookitem-list')

        # Get to url
        response = self.client.get(url)

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(BookItem.objects.count(), response.data['count'])

    def test_list_books_with_filter(self):
        # Get url for list
        url = reverse('bookitem-list')

        # Get to url
        response = self.client.get(url, {
            'availability': 'true'
        })

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(BookItem.objects.filter(user__isnull=True).count(), response.data['count'])

    def checkout_book(self):
        # Get url for checkout
        url = reverse('bookitem-checkout', args=[self.book.pk, self.user.pk])

        # Get to url
        response = self.client.get(url)

        # Update local data
        self.book = BookItem.objects.get(pk=self.book.pk)

        return response

    def return_book(self):
        # Get url for return
        url = reverse('bookitem-return', args=[self.book.pk])

        # Get to url
        response = self.client.get(url)

        # Update local data
        self.book = BookItem.objects.get(pk=self.book.pk)

        return response

    def test_checkout_and_return_book(self):
        checkout_response = self.checkout_book()

        # Run assertions for checkout
        self.assertEqual(checkout_response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.book.user, self.user)

        return_response = self.return_book()

        # Run assertions for return
        self.assertEqual(return_response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.book.user, None)
