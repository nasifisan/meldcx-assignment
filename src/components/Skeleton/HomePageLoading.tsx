import { GiAtomicSlashes } from 'react-icons/gi';

const HomePageLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col justify-center text-100 animate-bounce">
        <GiAtomicSlashes />
      </div>
    </div>
  );
};

export default HomePageLoading;
