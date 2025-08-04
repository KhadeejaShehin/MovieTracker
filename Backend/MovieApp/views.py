from django.shortcuts import render
from MovieApp.models import MovieTrackerDB
from rest_framework import viewsets
from .serializers import MovieTrackerSerializer
# Create your views here.

class MovieTracker_Viewset(viewsets.ModelViewSet):
    queryset = MovieTrackerDB.objects.all()
    serializer_class = MovieTrackerSerializer

