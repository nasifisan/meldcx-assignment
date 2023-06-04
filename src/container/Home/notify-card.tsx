import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Notify } from '@/models/Api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { notifyThunk } from '@/redux/thunks/thunks';

const NotifyCard = () => {
  const [message, setMessage] = useState<string>('');

  const dispatch = useAppDispatch();
  const notifyData = useAppSelector((state) => state.Api.notify);

  useEffect(() => {
    if (notifyData.data) {
      toast.success('Thank you for your feedback');
    } else if (notifyData.error !== '') {
      toast.error(`Sorry! we didn't received your joke`);
    }
  }, [notifyData]);

  const onClickNotify = () => {
    const payload: Notify = {
      name: 'Nasif Mahmud Nipom',
      email: 'nasif.nipom@outlook.com',
      repoUrl: 'https://github.com/nasifisan/meldcx-assignment.git',
      message: message,
    };

    dispatch(notifyThunk(payload));
  };

  return (
    <div className="relative rounded-12 border-1 shadow-xl bg-black-500 border-white-800 h-500 max-w-354">
      <div className="absolute inset-0 opacity-50">
        <Image
          fill
          className="object-center object-cover pointer-events-none"
          src={'/poker.png'}
          alt={'joker'}
          priority
        />
      </div>

      <div className="relative z-10 p-40 flex flex-col justify-between h-full">
        <div className="text-center text-24 font-space leading-30 text-accent-200 font-semibold">
          Send us a joke and notify who you're
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 space-y-8">
            <div className="text-16 leading-20 font-barlow text-white-50 font-semibold">
              Tell your joke
            </div>
            <textarea
              className="border-2 h-100 focus:border-success-300 font-barlow bg-[transparent] rounded-8 w-full px-8 py-4 text-white font-semibold border-white"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`btn-btn bg-other2 text-black-900 text-16 leading-20 transition
            ${
              notifyData.loading || !!notifyData.data
                ? 'disabled cursor-not-allowed'
                : ''
            }
            duration-150 ease-in-out hover:scale-110`}
            onClick={onClickNotify}
            disabled={notifyData.loading || !!notifyData.data}
          >
            Notify
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotifyCard;
