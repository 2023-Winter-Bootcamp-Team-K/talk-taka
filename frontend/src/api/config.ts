import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api/v1';
const BASE_URL = 'https://talktaka.site';

export const baseInstance = axios.create({
  baseURL: BASE_URL,
});

baseInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if(error.response.status === 401) {
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)