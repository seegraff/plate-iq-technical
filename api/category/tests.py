from rest_framework.test import APITestCase
from rest_framework import status

from django.contrib.auth.models import User
from django.urls import reverse

from category.models import CategoryItem


class CategoryItemTests(APITestCase):
    def setUp(self):
        # Init required prerequisite model instances
        self.user = User.objects.create(username='testuser', password='password1')

        # Create category objects to list
        CategoryItem.objects.create(name='Category 1', description='Test category 1')
        CategoryItem.objects.create(name='Category 2', description='Test category 2')
        CategoryItem.objects.create(name='Category 3', description='Test category 3')
        CategoryItem.objects.create(name='Category 4', description='Test category 4')
        CategoryItem.objects.create(name='Category 5', description='Test category 5')

        # Force authentication for user in requests
        self.client.force_authenticate(user=self.user)

    def test_retrieve_categories(self):
        # Get url for list
        url = reverse('categoryitem-list')

        # Get to url
        response = self.client.get('%s?%s=%s' % (url, 'limit', 0))

        # Run assertions
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(CategoryItem.objects.count(), len(response.data['results']))
