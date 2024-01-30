import { baseInstance } from '../config';
import { getCookie } from '../../utils/cookie';

const token = getCookie('token');

export const getDiaries = async () => {
  try {
    const response = await baseInstance.get(`/diary/diaries/`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
