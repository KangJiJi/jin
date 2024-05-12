import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

import Logo from '@/public/assets/trophy.png';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-80">
        <div className="w-full mb-10 flex justify-center items-center">
          <Image className="w-full" src={Logo} alt="logo" priority={true} />
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant="contained" className="aspect-[2/1] font-bold">
            <Link href="/choiceone">❗시작하기❗</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
