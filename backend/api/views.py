from django.shortcuts import render

# Example Code with HttpResponse class
from django.http import HttpResponse
def say_hello(request):
    return HttpResponse('Hello World')
