import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        <div className="flex">
          <div className="rounded-full shrink-0">
            <Link href={RoutePaths.HOME}>
              <Image
                className="rounded-full"
                src="/meldcx-logo.png"
                width="150"
                height="150"
                alt="site-logo"
                priority
              />
            </Link>
          </div>
        </div>

        {isLoggedIn ? (
          <div
            role="loggedIn"
            className="btn-btn bg-primary-1100 text-white-50 text-16 leading-20 cursor-pointer"
            onClick={() => gotToLogout()}
          >
            Logout
          </div>
        ) : (
          <Link href={RoutePaths.LOGIN}>
            <button
              role="singup-button"
              className="btn-btn bg-primary-1100 text-white-50 text-16 leading-20"
            >
              Signin/Signup
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
