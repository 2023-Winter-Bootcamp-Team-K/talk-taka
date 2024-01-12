from django.urls import re_path, path

from . import consumers
from . import views

websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<roomid>\w+)/$", consumers.ChatConsumer.as_asgi()),
]

urlpatterns = [
]