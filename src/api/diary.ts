import { baseInstance } from './config';
import { getCookie } from '../utils/cookie';
const hardcodedToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1MzkzNjEwLCJpYXQiOjE3MDUzODgyMTAsImp0aSI6IjQ5Zjk0NTZhZGU4YjRhZTc5YzMyOTBiZGMyNTM2ZDM0IiwidXNlcl9pZCI6InN0cmluZyJ9.wFoAhWXnyeRbOqjfnrxYIKbybVcfaJ1OeaK2YVjpzEk';


// const diaryId = '1'; 


export const getDiary = async ( Id: string) => {
  // const token = getCookie('token'); 
    try {
      const response = await baseInstance.get(`/diary/${Id}/`, {
        headers: {
            Authorization: `${hardcodedToken}`,
        },
      });
      if (response.status === 200) {
        console.log("일기 조회 성공");
        return response.data; 
      } else {
        console.log("일기 조회 실패", response.status);
        return null;
      }
    } catch (error) {
      console.log("에러 발생", error);
      return null;
    }
  };
  