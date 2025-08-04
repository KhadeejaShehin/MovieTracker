from django.db import models


# Create your models here.
class MovieTrackerDB(models.Model):
    CONTENT_TYPES = [('movie', 'Movie'), ('tv Show', 'TV Show')]
    STATUS_CHOICES = [('watching', 'Watching'), ('completed', 'Completed'), ('wishlist', 'Wishlist')]
    PLATFORM_CHOICES = [('netflix','Netflix'),('prime','Prime')]
    GENRE_CHOICES =[('romance', 'Romance'),('comedy', 'Comedy'),('fantasy','Fantasy'), ('action','Action')]

    title = models.CharField(max_length=300)
    content_type = models.CharField(max_length=20, choices=CONTENT_TYPES)
    director = models.CharField(max_length=300)
    genre = models.CharField(max_length=100, choices=GENRE_CHOICES)
    platform = models.CharField(max_length=100,choices=PLATFORM_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    total_episodes = models.IntegerField(default=0)
    episodes_watched = models.IntegerField(default=0)
    rating = models.IntegerField(default=0 )
    review = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title