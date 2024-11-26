from rest_framework.viewsets import ModelViewSet
from ..models import Book,Video,User,Course,Review
from .serializers import BookSerializers,VideoSerializers,UserSerializers,CourseSerializers,ReviewSerializers
class VideoViewSet(ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializers

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializers

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers

class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class=CourseSerializers

class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class=ReviewSerializers