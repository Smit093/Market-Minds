from django.contrib import admin
from .models import Book,Video,User,Course,Review
# Register your models here.

admin.site.register(Video)
admin.site.register(Book)
admin.site.register(User)
admin.site.register(Course)
admin.site.register(Review)
