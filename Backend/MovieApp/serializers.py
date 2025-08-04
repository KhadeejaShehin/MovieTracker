from rest_framework import serializers
from .models import MovieTrackerDB

class MovieTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieTrackerDB
        fields = '__all__'