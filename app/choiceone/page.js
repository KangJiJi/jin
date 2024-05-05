'use client';

import Image from 'next/image';
import IconVs from '/public/icons/vs.png';
import Profile from '/components/profile/Profile';

import ProfileKeke from '/public/profile/keke.png';

export default function ChoiceOne() {
  const handleSelect = () => {
    console.log('clicked!');
  };

  return (
    <main className="min-w-dvw w-screen min-h-dvh h-screen">
      <div className="w-full h-12 flex justify-center items-center">
        <div>Title</div>
      </div>
      <div className="relative w-full h-[calc(100%-3rem)]">
        <div className="w-full h-1/2 bg-blue-500 flex justify-center items-center">
          <Profile name="zzzzzz" onClick={handleSelect} />
        </div>
        <div className="w-full h-1/2 bg-green-500 flex justify-center items-center">
          <Profile image={ProfileKeke} name="zzzz" onClick={handleSelect} />
        </div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 z-1000">
          <Image className="w-full" src={IconVs} alt="vs" priority />
        </div>
      </div>
    </main>
  );
}
