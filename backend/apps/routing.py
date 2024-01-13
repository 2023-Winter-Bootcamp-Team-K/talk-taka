from django.urls import re_path, path

from . import chat_consumer
from . import views

websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<roomid>\w+)/$", chat_consumer.ChatConsumer.as_asgi()),
]
