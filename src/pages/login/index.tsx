import LoginForm from '@/components/Login';
import { RoutePaths } from '@/constants/RoutePaths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      {/* <div className="w-1/3 shrink-0">
        <Image
          src="/loginIcon.png"
          height="400"
          width="400"
          alt="loginIcon"
          className='shrink-0'
        />
      </div> */}

      <div className="flex flex-col justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
