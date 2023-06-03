import Image from 'next/image';

const NotifyCard = () => {
  return (
    <div className="relative rounded-8 border-1 shadow-xl bg-black-500 border-white-800 h-500 max-w-354">
      <div className="absolute inset-0 opacity-50">
        <Image
          fill
          className="object-center object-cover pointer-events-none"
          src={'/poker.png'}
          alt={'joker'}
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
            <textarea className="border-2 h-100 focus:border-success-300 font-barlow bg-[transparent] rounded-8 w-full px-8 py-4 text-white font-semibold border-white" />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn-btn bg-other2 text-black-900 text-16 leading-20">
            Notify
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotifyCard;
