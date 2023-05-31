import { useAppDispatch } from '@/redux/hooks';
import { getActiveDeviceThunk } from '@/redux/thunks/DeviceThunks';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getActiveDeviceThunk());
  }, [])

  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 text-black main-container">
        Hello World from new planet!!
      </section>
    </>
  );
}

Home.pageOptions = {
  requiresAuth: true,
};
