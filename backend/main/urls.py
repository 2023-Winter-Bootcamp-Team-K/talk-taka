
from django.urls import path
from .views import main_page,before_login_page, after_login_page

urlpatterns = [
    path('', main_page, name='main_page'),
    path('before_login/', before_login_page, name='before_login_page'),
    path('after_login/', after_login_page, name='after_login_page'),
    # path('image/', UploadProfilePictureView.as_view(), name='send image')

]