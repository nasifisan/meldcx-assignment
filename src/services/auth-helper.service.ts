import { setCookie, getCookie, deleteCookie } from 'cookies-next';

import { TokenInfo } from './utils/auth';
import { AuthService } from './auth.service';

import { User } from '@/models/User';
import { setUser } from '@/redux/slices/AuthSlice';

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
const EXPIRE_TIME_KEY = 'EXPIRES_IN';

export const setAuthCredentials = (
  accessToken: string,
  dispatch: Function
) => {
  const tokenInfo = new TokenInfo(accessToken);
  const details: User = tokenInfo.getUserDetails();

  dispatch(setUser(details));

  if (
    !getCookie(ACCESS_TOKEN_KEY) &&
    accessToken &&
    accessToken !== ''
  ) {
    setCookie(ACCESS_TOKEN_KEY, accessToken);
  }
};

const getAuthCredentials = (accessToken: string): User => {
  const tokenInfo = new TokenInfo(accessToken);
  const info: User = tokenInfo.getUserDetails();

  return info as User;
};

export const createSession = (dispatch: Function) => {
  const token = getCookie(ACCESS_TOKEN_KEY) as string;

  setAuthCredentials(token, dispatch);
};

export const goToLogin = async (data: any, dispatch: Function) => {
  try {
    const authService = new AuthService();
    const response = await authService.getToLogin(data);

    if (response?.data) {
      const accessToken = response?.data;

      setAuthCredentials(accessToken, dispatch);
    }

    return response;
  } catch (e) {
    return e;
  }
};

export const gotToLogout = () => {
  deleteCookie(ACCESS_TOKEN_KEY);
  deleteCookie(REFRESH_TOKEN_KEY);
  deleteCookie(EXPIRE_TIME_KEY);
  // getAnonymousSession(dispatch);
  window.location.href = '';
};
