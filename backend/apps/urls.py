# chat/urls.py
from django.urls import path

<<<<<<< HEAD
from .views import GPTAnswerView, ChatRoomCreateView
=======
from .views import ChatRoomCreateView, ChatRoomCloseView, ChatRoomListView, ChatRoomImageUploadView
>>>>>>> develop

urlpatterns = [

    # path('gpt_answer/', GPTAnswerView.as_view(), name='gpt_answer'),
    path('create_chat_room/', ChatRoomCreateView.as_view(), name='create_chat_room'),
    path('chat_close/', ChatRoomCloseView.as_view(), name='delete_chatroom'),
    path('chat_list/<int:chat_room_id>/', ChatRoomListView.as_view(), name='list_chatroom'),
    path('chat_images/<int:chat_room_id>/',ChatRoomImageUploadView.as_view(), name='image_chatroom'),
]