
from django.urls import path,include
from .views import RegisterView, LoginView,LogoutView,DeleteUserView,CheckIdAvailability



urlpatterns = [

    path("members", RegisterView.as_view(), name="register"),
    path("auth/login/", LoginView.as_view(), name="login"),
    path('auth/logout/',LogoutView.as_view(), name="logout"),
    path("members/delete/<int:id>/", DeleteUserView.as_view(), name="delete_user"),
    path('check/id/availability/', CheckIdAvailability.as_view(), name='check-id-availability'),

]