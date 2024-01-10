from django.contrib import admin
from django.urls import include,path

from apps.consumers import ChatRoomConsumer

urlpatterns = [
    path('admin/', admin.site.urls),
]

websocket_urlpatterns = [
    path('ws/chatroom/', ChatRoomConsumer.as_asgi()),
]