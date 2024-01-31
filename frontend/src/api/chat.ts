import { baseInstance } from './config';
import { getCookie } from '../utils/cookie';

export const getChattings = async (chatRoomId: string | null) => {
  const token = getCookie('token');
  try {
    const response = await baseInstance.get(`/apps/chat_list/${chatRoomId}/`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('에러 발생', error);
    return null;
  }
};
