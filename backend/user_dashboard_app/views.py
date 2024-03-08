from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q, Avg, Count
from .models import User
from .serializers import UserSerializer
from rest_framework import serializers


class UserViewParamsSerializer(serializers.Serializer):
    name = serializers.CharField(required=False)
    age = serializers.IntegerField(required=False)
    active = serializers.CharField(required=False)

    def validate_age(self, age):
        if age <= 0 or age > 150:
            raise serializers.ValidationError("invalid age")
        return age



class Users(views.APIView):
    pagination_class = PageNumberPagination

    @classmethod
    def get(self, request: Request):
        data_serializer = UserViewParamsSerializer(data=request.GET)
        data_serializer.is_valid(raise_exception=True)

        name = data_serializer.validated_data.get('name')
        age = data_serializer.validated_data.get('age')
        active = data_serializer.validated_data.get('active')

        page_query = Q()

        if name:
            page_query &= Q(name__icontains=name)
        if age:
            page_query &= Q(age=age)
        if active is not None:
            page_query &= Q(active=active)


        queryset = User.objects.filter(page_query).order_by('id')
        paginator = self.pagination_class()
        paginated_queryset = paginator.paginate_queryset(queryset, request)

        serializer = UserSerializer(paginated_queryset, many=True)

        stats = queryset.aggregate(
            avg_age=Avg('age'),
            active_users_count=Count('id', filter=Q(active=True)),
            users_count=Count('id'),
            inactive_users_count=Count('id', filter=Q(active=False)),
        )
        return Response({"data": serializer.data, "page": (request.query_params.get('page') or 1),"count": len(queryset), "stats": stats})
