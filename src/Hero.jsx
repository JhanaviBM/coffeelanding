import React from 'react';

const Hero = () => {
  return (
    <div className="flex bg-[url('/src/assets/images/coffee.jpg')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="inset-0"></div>
      <div className="relative bg-black/50 z-10 text-white text-4xl flex items-center justify-center w-full">
        Welcome to Coffee Land ☕
      </div>
    </div>
  );
};

export default Hero;
