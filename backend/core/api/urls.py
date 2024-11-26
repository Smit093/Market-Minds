from rest_framework.routers import DefaultRouter
from app.api.urls import book_router,video_router,user_router,course_router,review_router
from django.urls import path,include

router = DefaultRouter()

# Videos
router.registry.extend(video_router.registry)

# Book
router.registry.extend(book_router.registry)

# User
router.registry.extend(user_router.registry)

# Course
router.registry.extend(course_router.registry)

# Reviews
router.registry.extend(review_router.registry)

urlpatterns = [
    path('',include(router.urls)),
]