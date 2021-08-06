from rest_framework import viewsets

from core.models import Enterprise
from core.serializers import EnterpriseSerializer


class EnterpriseViewSet(viewsets.ModelViewSet):
    queryset = Enterprise.objects.all()
    serializer_class = EnterpriseSerializer
