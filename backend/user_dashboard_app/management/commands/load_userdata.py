from django.core.management.base import BaseCommand
from user_dashboard_app.models import User
import json

class Command(BaseCommand):
    help = 'Load and parse user data'

    def handle(self, *args, **kwargs):
        with open('user_data.json') as file:
            data = json.load(file)
            for user_data in data:
                User.objects.create(
                    name=user_data['name'],
                    age=user_data['age'],
                    active=user_data['active'],
                    last_login=user_data['last_login']
                )
