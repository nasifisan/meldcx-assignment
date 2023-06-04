import axios from 'axios';
// import { authResolver } from './auth-resolver.service';
import { ACCESS_TOKEN_KEY, gotToLogout } from './auth-helper.service';
// import { makeStore } from '@/redux/store';
import { getCookie } from 'cookies-next';

const baseOptions = {
  timeout: 0,
  withCredentials: false,
};

export const HttpClient = axios.create(baseOptions);

// HttpClient.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

HttpClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (!error.response) {
      alert('NETWORK ERROR');
    } else {
      const code = error.response.status;
      // const response = error.response.data;
      // const originalRequest = error.config;

      // if (code === 401 && !originalRequest._retry) {
      //   try {
      //     // await authResolver.getToken(makeStore().dispatch);

      //     // originalRequest._retry = true;
      //     // return HttpClient(error.config);
      //   } catch (err) {
      //     gotToLogout();
      //   }
      // }

      const token = getCookie(ACCESS_TOKEN_KEY);

      if (code === 401 && token) {
        gotToLogout();
      }

      return Promise.reject(error);
    }
  }
);
