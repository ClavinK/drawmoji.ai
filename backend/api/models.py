from django.db import models

# Create your models here.
class Drawing(models.Model):
    png_file = models.TextField()
    objects = models.Manager()
    
    # def __str__(self):
    #     return self.png_file[:50]

