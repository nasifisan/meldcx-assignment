import { AppProps } from 'next/app';
import { PropsWithChildren, useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next';

import {
  ACCESS_TOKEN_KEY,
  createSession,
} from '@/services/auth-helper.service';
import HomePageLoading from './Skeleton/HomePageLoading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RoutePaths } from '@/constants/RoutePaths';

const AuthManager = ({
  Component,
  children,
  router,
}: PropsWithChildren<AppProps>) => {
  const [can, setCan] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.Auth.user);
  const { requiresAuth = false } = Component.pageOptions || {};

  useEffect(() => {
    createSession(dispatch);
  }, []);

  useEffect(() => {
    if (
      requiresAuth &&
      user &&
      user.Name !== null &&
      user.Name == ''
    ) {
      if (getCookie(ACCESS_TOKEN_KEY)) {
        deleteCookie(ACCESS_TOKEN_KEY);
      }
      router.push(RoutePaths.LOGIN);
    } else if (user && user.Name !== null && user.Name !== '') {
      if (router?.state?.route === RoutePaths.LOGIN) {
        router.push(RoutePaths.HOME);
      } else {
        setCan(true);
      }
    } else if (
      !requiresAuth &&
      user &&
      user.Name !== null &&
      user.Name == ''
    ) {
      setCan(true);
    }
  }, [requiresAuth, user]);

  return <>{can ? <div>{children}</div> : <HomePageLoading />}</>;
};

export default AuthManager;
