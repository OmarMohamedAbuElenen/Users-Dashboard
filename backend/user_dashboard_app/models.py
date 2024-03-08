from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    active = models.BooleanField(default=False)
    last_login = models.DateTimeField()