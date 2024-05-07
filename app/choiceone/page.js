'use client';

import { useState } from 'react';
import Image from 'next/image';
import IconVs from '/public/icons/vs.png';
import Profile from '/components/profile/Profile';

import ProfileKeke from '/public/profile/keke.png';

export default function ChoiceOne() {
  const [topButtonClicked, setTopButtonClicked] = useState(false);
  const [bottomButtonClicked, setBottomButtonClicked] = useState(false);

  const handleSelect = (buttonClickedSetter, selectedProfile) => {
    buttonClickedSetter(true);
    console.log('clicked!');
  };

  return (
    <main className="min-w-dvw w-screen min-h-dvh h-screen font-sans">
      <div className="w-full h-12 flex justify-center items-center">
        <div className="text-2xl font-bold">Title</div>
      </div>
      <div className="relative w-full h-[calc(100%-3rem)]">
        <div
          className={`w-full bg-blue-500 flex justify-center items-center h-1/2`}
        >
          <div
            className={`${
              bottomButtonClicked
                ? 'transition duration-1000 ease-in-out opacity-0'
                : ''
            } ${
              topButtonClicked
                ? 'transition duration-1000 ease-in-out translate-y-full'
                : ''
            }`}
          >
            <Profile
              name="zzzzzz"
              onClick={() => handleSelect(setTopButtonClicked)}
              buttonVisibility={topButtonClicked}
            />
          </div>
        </div>

        <div
          className={`w-full bg-green-500 flex justify-center items-center h-1/2`}
        >
          <div
            className={`${
              topButtonClicked
                ? 'transition duration-1000 ease-in-out opacity-0'
                : ''
            } ${
              bottomButtonClicked
                ? 'transition duration-1000 ease-in-out -translate-y-full'
                : ''
            }`}
          >
            <Profile
              image={ProfileKeke}
              name="zzzz"
              onClick={() => handleSelect(setBottomButtonClicked)}
              buttonVisibility={bottomButtonClicked}
            />
          </div>
        </div>

        {topButtonClicked == bottomButtonClicked && (
          <>
            <div className="absolute top-1/2 border-4 border-black w-full z-999"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 z-1000">
              <Image className="w-full" src={IconVs} alt="vs" priority />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
