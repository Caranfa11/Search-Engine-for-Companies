from django.contrib import admin
from core.models import Enterprise


class EnterpriseAdmin(admin.ModelAdmin):
    list_display = ('__all__',)
    ordering = ('-name',)


admin.site.register(Enterprise)
