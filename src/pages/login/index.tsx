import Head from 'next/head';
import Image from 'next/image';

import LoginForm from '@/components/Login';

const Login = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="w-full h-screen grid grid-cols-2 gap-16 sm:gap-8 xs:gap-8 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
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
      </section>
    </>
  );
};

export default Login;
