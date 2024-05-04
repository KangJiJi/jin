import Image from 'next/image';
import IconVs from '/public/icons/vs.png';

export default function ChoiceOne() {
  return (
    <main className="min-w-dvw w-screen min-h-dvh h-screen">
      <div className="w-full h-12">Title</div>
      <div className="relative w-full h-[calc(100%-3rem)]">
        <div className="w-full h-1/2 bg-blue-500">up</div>
        <div className="w-full h-1/2 bg-green-500">down</div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 z-10000">
          <Image className="w-full" src={IconVs} alt="vs" priority />
        </div>
      </div>
    </main>
  );
}
