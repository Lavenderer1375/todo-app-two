import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-t from-indigo-400 to-indigo-900">
      <div className="max-w-[1440px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 hover:cursor-pointer hover:text-stone-900 ease-in duration-200">
          Here You Can Finde
        </h1>
        <Typed
          strings={['Anything', 'Shoes', 'Bags']}
          typeSpeed={120}
          backSpeed={120}
          loop
        />
        <p className="font-semibold text-center text-xl pt-5">
          Finde whatever you need in our vast database of different objects.
        </p>
      </div>
    </div>
  );
};

export default Hero;
