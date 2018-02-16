from rest_framework.routers import DefaultRouter

from category.viewsets import CategoryItemViewSet


router = DefaultRouter()
router.register(r'categories', CategoryItemViewSet)
