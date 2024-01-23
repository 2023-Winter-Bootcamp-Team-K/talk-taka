import { baseInstance } from '../config';

type DiaryType = {
  token: string;
};

export const getDiaries = async ({ token }: DiaryType) => {
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
