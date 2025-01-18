from django.urls import path
from .views import DrawingList

# URLConf
urlpatterns = [
    path('drawings/', DrawingList.as_view(), name='index'),
]