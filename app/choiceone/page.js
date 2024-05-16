'use client';

import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import IconVs from '@/public/assets/vs.png';
import Profile from '@/components/profile';
import LoadingSpinner from '@/components/loadingSpinner';
import profileInfoList from '@/data/profileInfoList';
import { createTwoChunkList } from '@/utils/chunk';
import { sleep } from '@/utils/sleep';

export default function ChoiceOne() {
  const [chunkProfileInfoList, setChunkProfileInfoList] = useState([]);
  const [selectedProfileInfoList, setSelectedProfileInfoList] = useState([]);

  const [loadingState, setLoadingState] = useState(false);
  const [chunkIndex, setChunkIndex] = useState(0);

  const [topButtonClicked, setTopButtonClicked] = useState(false);
  const [bottomButtonClicked, setBottomButtonClicked] = useState(false);

  useEffect(() => {
    setChunkProfileInfoList(createTwoChunkList(profileInfoList));
  }, []);

  useEffect(() => {
    if (chunkProfileInfoList.length > 0) {
      setChunkIndex(0);
      setLoadingState(true);
    }
  }, [chunkProfileInfoList]);

  useEffect(() => {
    if (selectedProfileInfoList.length === 0) return;

    if (selectedProfileInfoList.length === chunkProfileInfoList.length) {
      if (chunkProfileInfoList.length === 1) {
        redirect(`/result/${selectedProfileInfoList[0].idx}`);
      }

      setChunkProfileInfoList(createTwoChunkList(selectedProfileInfoList));
      setSelectedProfileInfoList([]);
      setChunkIndex(0);
      return;
    }
  }, [selectedProfileInfoList]);

  const handleSelect = async (buttonClickedSetter, selectedProfileInfo) => {
    if (topButtonClicked || bottomButtonClicked) return;
    buttonClickedSetter(true);

    await sleep(2000);

    if (chunkIndex + 1 != chunkProfileInfoList.length) {
      setChunkIndex(chunkIndex + 1);
    }

    setSelectedProfileInfoList([
      ...selectedProfileInfoList,
      selectedProfileInfo,
    ]);

    setTopButtonClicked(false);
    setBottomButtonClicked(false);
  };

  if (loadingState == false) {
    return (
      <main className="min-w-dvw w-screen min-h-dvh h-screen flex justify-center items-center">
        <LoadingSpinner />
        <>
          {/* preloading */}
          {chunkProfileInfoList.length != 0 ? (
            <div className="hidden">
              <Image
                className="w-full max-h-36"
                src={chunkProfileInfoList[0][0].image}
                alt="preload image"
                priority
              />
              <Image
                className="w-full max-h-36"
                src={chunkProfileInfoList[0][1].image}
                alt="preload image"
                priority
              />
            </div>
          ) : (
            <></>
          )}
        </>
      </main>
    );
  }

  return (
    <main className="min-w-dvw w-screen min-h-dvh h-screen font-sans">
      <div className="w-full h-12 flex justify-center items-center">
        <div className="text-2xl font-bold">
          {chunkProfileInfoList.length === 1 ? (
            <>!👀!👀! 결승 !👀!👀!</>
          ) : (
            <>
              🚩 {chunkProfileInfoList.length * 2} 강 ({chunkIndex + 1} /
              {chunkProfileInfoList.length}) 🚩
            </>
          )}
        </div>
      </div>
      <div className="relative w-full h-[calc(100%-3rem)]">
        <div
          className={`w-full bg-blue-500 flex justify-center h-1/2 ${
            topButtonClicked ? 'items-end' : 'items-center'
          }`}
        >
          <div
            className={`transition duration-1000 ease-in-out ${
              bottomButtonClicked ? 'opacity-0' : ''
            } ${topButtonClicked ? 'translate-y-1/2' : ''}`}
          >
            {chunkProfileInfoList.length > 0 ? (
              <Profile
                profileInfo={chunkProfileInfoList[chunkIndex][0]}
                onClick={(selectedProfileInfo) =>
                  handleSelect(setTopButtonClicked, selectedProfileInfo)
                }
                buttonVisibility={topButtonClicked}
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div
          className={`w-full bg-green-500 flex justify-center h-1/2 ${
            bottomButtonClicked ? 'items-start' : 'items-center'
          }`}
        >
          <div
            className={`transition duration-1000 ease-in-out ${
              topButtonClicked ? 'opacity-0' : ''
            } ${bottomButtonClicked ? '-translate-y-1/2' : ''}`}
          >
            {chunkProfileInfoList.length > 0 ? (
              <Profile
                profileInfo={chunkProfileInfoList[chunkIndex][1]}
                onClick={(selectedProfileInfo) =>
                  handleSelect(setBottomButtonClicked, selectedProfileInfo)
                }
                buttonVisibility={bottomButtonClicked}
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        {topButtonClicked == bottomButtonClicked && (
          <>
            <div className="absolute top-1/2 border-4 border-black w-full z-999"></div>
            <div className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7 z-1000">
              <Image className="w-full" src={IconVs} alt="vs" priority />
            </div>
          </>
        )}
      </div>

      <>
        {/* preloading */}
        {profileInfoList.length / 2 === chunkProfileInfoList.length &&
        chunkIndex != chunkProfileInfoList.length - 1 ? (
          <div className="hidden">
            <Image
              className="w-full max-h-36"
              src={chunkProfileInfoList[chunkIndex + 1][0].image}
              alt="preload image"
              priority
            />
            <Image
              className="w-full max-h-36"
              src={chunkProfileInfoList[chunkIndex + 1][1].image}
              alt="preload image"
              priority
            />
          </div>
        ) : (
          <></>
        )}
      </>
    </main>
  );
}
