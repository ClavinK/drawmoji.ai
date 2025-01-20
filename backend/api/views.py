import base64
from io import BytesIO
from PIL import Image
from django.http import HttpResponse
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
            base64_data = serializer.validated_data['png_file'].replace('data:image/png;base64,', '') # Remove the prefix if it exists
            decoded_image = base64.b64decode(f'{base64_data}==') # Fixes padding error if it is not a multiple of 4
            image = Image.open(BytesIO(decoded_image)) # Open the image from the decoded bytes
            buffer = BytesIO() # Create a buffer to save the image
            image.save(buffer, format="PNG") # Save the image to the buffer
            buffer.seek(0) # Seek to the beginning of the buffer
            serializer.save()
            return HttpResponse(buffer, content_type="image/png") # Return the image as a response
        return Response(serializer.errors, status=400)