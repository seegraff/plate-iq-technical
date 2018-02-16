from rest_framework.routers import DefaultRouter

from book.viewsets import BookItemViewSet


router = DefaultRouter()
router.register(r'books', BookItemViewSet)
