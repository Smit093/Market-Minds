from rest_framework.serializers import ModelSerializer
from ..models import Book,Video,User,Course,Review


class VideoSerializers(ModelSerializer):
    class Meta:
        model = Video
        fields = ('id','title','link','code','likes','description')


class BookSerializers(ModelSerializer):
    class Meta:
        model = Book
        fields = ('id','title','author','cover','ratings','reviews','available','link')

class  UserSerializers(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','email','password','gender')

class CourseSerializers(ModelSerializer):
    class Meta:
        model = Course
        fields = ('id','title','creator','img','ratings','price','purchaseLink')

class ReviewSerializers(ModelSerializer):
    class Meta:
        model = Review
        fields = ('id','name','review','ratings','gender')
