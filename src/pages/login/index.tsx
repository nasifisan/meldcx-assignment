import LoginForm from '@/components/Login';
import { RoutePaths } from '@/constants/RoutePaths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2 gap-16 sm:gap-8 xs:gap-8 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
      <div className="col-span-1 flex flex-row justify-end md:justify-center sm:justify-center xs:justify-center">
        <div className="flex flex-col justify-center">
          <Image
            src={'/login_image.png'}
            height="400"
            width="400"
            alt="loginIcon"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center col-span-1 md:flex-row sm:flex-row xs:flex-row">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
