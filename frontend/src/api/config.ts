import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://talktaka.site/api/v1',
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