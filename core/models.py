from django.db import models


class Enterprise(models.Model):
    """
    Model for Enterprises
    """
    name = models.CharField(max_length=255, blank=False)
    address = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    phone = models.CharField(max_length=25)
    image = models.ImageField(
        upload_to='enterprise',
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
