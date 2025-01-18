from django.contrib import admin
from django.urls import path, include
from api.views import * 

urlpatterns = [
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]
