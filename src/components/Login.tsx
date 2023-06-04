import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdMailOutline, MdOutlineLockPerson } from 'react-icons/md';
import toast from 'react-hot-toast';

import { goToLogin } from '@/services/auth-helper.service';
import { RoutePaths } from '@/constants/RoutePaths';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<boolean>(false);

  const postData = async (formData: any) => {
    const res = await goToLogin(formData, dispatch);

    if (res?.response?.status === 401) {
      toast.error('Please enter the correct password');
      setError(true);
    } else router.push(RoutePaths.HOME);
  };

  const formOnSubmit = (e: any) => {
    e.preventDefault();

    const formPayload = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    postData(formPayload);
  };

  const wrongPasswordWarning = (
    <div className="text-14 leading-18 font-medium bg-white-50 text-warn-400 mt-2">
      wrong password
    </div>
  );

  return (
    <div className="rounded-8 p-32 space-y-40 min-w-280 max-w-340 bg-white-50">
      <div>
        <h1 className="font-bold text-32 leading-40">WELCOME!</h1>
        <h3 className="font-semibold text-24 leading-30">
          Please sign in
        </h3>
      </div>

      <form onSubmit={formOnSubmit}>
        <div className="relative flex w-full flex-wrap items-stretch mb-8">
          <span className="z-10 left-0 flex flex-col justify-center h-full font-normal absolute bg-[transparent] text-26">
            <MdMailOutline />
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="pl-40 py-4 shadow-bottom transition ease-in-out delay-150 
            w-full border-b-white-800 relative bg-white-50 border-b-2 outline-none 
            focus:outline-none focus:border-primary-400 hover:shadow-lg"
            required
          />
        </div>

        <div className="relative flex w-full flex-wrap items-stretch">
          <span
            className={`z-10 left-0 flex flex-col justify-center h-full font-normal absolute bg-[transparent] text-26
              ${error ? 'text-warn-400' : ''}`}
          >
            <MdOutlineLockPerson />
          </span>

          <input
            type="password"
            placeholder="Password"
            name="password"
            className={`pl-40 py-4 shadow-bottom transition ease-in-out delay-150 
              w-full relative bg-white-50 border-b-2 outline-none 
              focus:outline-none hover:shadow-lg
              ${
                error
                  ? 'border-b-warn-400'
                  : 'border-b-white-800 focus:border-primary-400'
              }`}
            required
          />
        </div>

        {error && wrongPasswordWarning}

        <div className={`${error ? 'mt-12' : 'mt-32'}`}>
          <button
            className="border-2 rounded-8 py-4 px-8 text-16 leading-20 font-medium hover:bg-primary-600 hover:text-white-50"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
