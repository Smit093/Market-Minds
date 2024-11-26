from django.db import models

# Create your models here.
class Video(models.Model):
    title=models.CharField(max_length=500)
    link=models.CharField(max_length=500)
    code=models.CharField(max_length=500)
    likes = models.BigIntegerField()
    description=models.TextField()

    def __str__(self):
        return f'Video title : {self.title}'
    
class Book(models.Model):
    title=models.CharField(max_length=500)
    author=models.CharField(max_length=300)
    cover=models.CharField(max_length=500)
    ratings = models.IntegerField()
    reviews=models.TextField()
    available=models.TextField()
    link = models.CharField(max_length=500)

    def __str__(self):
        return f'Book title : {self.title}'
    
class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=50)
    gender = models.CharField(max_length=10,default='male')

    def __str__(self):
        return f'Name : {self.name}'

class Course(models.Model):
    title=models.CharField(max_length=100)
    creator=models.CharField(max_length=100)
    img=models.CharField(max_length=500)
    ratings = models.IntegerField()
    price=models.CharField(max_length=50)
    purchaseLink = models.CharField(max_length=100)

    def __str__(self):
        return f'Title : {self.title}'
    
class Review(models.Model):
    name = models.CharField(max_length=50)
    review = models.CharField(max_length=200)
    ratings = models.IntegerField()
    gender = models.CharField(max_length=10)

    def __str__(self):
        return f'Name : {self.name}'