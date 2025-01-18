import base64
from rest_framework.views import APIView
from .models import Drawing
from rest_framework.response import Response
from . serializer import DrawingSerializer

class DrawingList(APIView):
    def get(self, request):
        drawing1 = Drawing.objects.all()
        serializer = DrawingSerializer(drawing1, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DrawingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)