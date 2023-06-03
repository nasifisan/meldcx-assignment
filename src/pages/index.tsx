import Head from 'next/head';

import ActiveDevice from '@/container/Home/active-device';
import NotifyCard from '@/container/Home/notify-card';

export default function Home() {
  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <section role="home-section" className="main-container">
        <div className="grid grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
          <div className="col-span-3 flex justify-center h-full">
            <ActiveDevice />
          </div>
          <div className="col-span-2 flex justify-center my-50 md:my-20 sm:my-20 xs:my-20">
            <NotifyCard />
          </div>
        </div>
      </section>
    </>
  );
}

Home.pageOptions = {
  requiresAuth: true,
};
