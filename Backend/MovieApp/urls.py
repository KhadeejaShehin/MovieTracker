from django.contrib import admin
from django.urls import path
from MovieApp import views
from rest_framework.routers import DefaultRouter
from django.conf import settings

router = DefaultRouter()
router.register('movietracker',views.MovieTracker_Viewset,basename='movietracker')




urlpatterns = [
    path('admin/',admin.site.urls)
] + router.urls