import asyncio
import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatRoomConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data=None, bytes_data=None, **kwargs):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        if message == 'ping':
            await asyncio.sleep(1)  # 임의로 1초 대기
            response_message = 'pong'
        else:
            response_message = 'Invalid message'

        await self.send(text_data=json.dumps({
            'message': response_message
        }))