import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div>
        <div className="w-full mb-8 flex justify-center items-center">logo</div>
        <Button variant="contained" className="aspect-[2/1] font-bold">
          <Link href="/choiceone">❗시작하기❗</Link>
        </Button>
      </div>
    </main>
  );
}
