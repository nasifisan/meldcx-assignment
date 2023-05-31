import { AppProps } from 'next/app';
import { PropsWithChildren, useEffect, useState } from 'react';


import {
  createSession,
} from '@/services/auth-helper.service';
import HomePageLoading from './Skeleton/HomePageLoading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

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
      router.push('/login');
    }

    if (
      user &&
      user.Name !== null &&
      user.Name !== ''
    ) {
      setCan(true);
    }

    if (!requiresAuth && user && user.Name !== null) {
      setCan(true);
    }
  }, [requiresAuth, user]);

  return <>{can ? <div>{children}</div> : <HomePageLoading />}</>;
};

export default AuthManager;
