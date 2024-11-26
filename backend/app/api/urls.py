from rest_framework.routers import DefaultRouter
from .views import BookViewSet,VideoViewSet,UserViewSet,CourseViewSet,ReviewViewSet


video_router = DefaultRouter()
video_router.register(r'videos',VideoViewSet)

book_router = DefaultRouter()
book_router.register(r'books',BookViewSet)

user_router = DefaultRouter()
user_router.register(r'users',UserViewSet)

course_router = DefaultRouter()
course_router.register(r'courses',CourseViewSet)

review_router = DefaultRouter()
review_router.register(r'reviews',ReviewViewSet)
