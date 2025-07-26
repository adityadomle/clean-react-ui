import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for{' '}
          </p>
          <span className='md:text-5xl sm:text-2xl text-xl font-bold text-[#00df9a] pl-2'>
            <Typewriter
              options={{
                strings: ['BTB', 'BTC', 'SaaS'],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
