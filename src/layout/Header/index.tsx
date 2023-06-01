import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaHome,
  FaShoppingCart,
  FaProductHunt,
} from 'react-icons/fa';

import { RoutePaths } from '@/constants/RoutePaths';
import { useAppSelector } from '@/redux/hooks';
import { gotToLogout } from '@/services/auth-helper.service';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useAppSelector((state) => state.Auth.user);

  useEffect(() => {
    if (user && user.Name && user.Name !== '') {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <div className="w-full sticky z-999 top-0 bg-white-50">
      <nav className="main-container flex justify-between items-center py-16">
        <div className='flex'>
          <div className="rounded-full shrink-0">
            <Image
              className="rounded-full"
              src="/meldcx-logo.png"
              width="150"
              height="150"
              alt="site-logo"
              priority
            />
          </div>

          <div className="flex flex-row gap-32 items-center text-24 text-black">
            <Link href={RoutePaths.HOME}>
              <div className="flex space-x-6 group">
                <div>
                  <FaHome />
                </div>
                <div role='home' className="flex flex-col justify-end text-16 leading-20 font-semibold group-hover:text-warn">
                  Home
                </div>
              </div>
            </Link>
          </div>
        </div>

        {isLoggedIn ? (
          <div role='loggedIn' className="btn-btn" onClick={() => gotToLogout()}>
            Logout
          </div>
        ) : (
          <Link href={RoutePaths.LOGIN}>
            <button role='singup-button' className="btn-btn">Signin/Signup</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
