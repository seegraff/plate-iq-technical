from rest_framework import viewsets, mixins

from django.contrib.auth.models import User

from user.serializers import UserSerializer


class UserViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
