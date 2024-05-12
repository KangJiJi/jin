import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import profileInfoList from '@/data/profileInfoList';

export default function Result(props) {
  const profileInfo = profileInfoList.find(
    ({ idx }) => idx == props.params.idx
  );

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-72 aspect-[1.618/1]">
        <div className="w-full mb-8 flex justify-center items-center text-2xl font-bold">
          😍😍😍 우승 😍😍😍
        </div>
        <div className="w-full mb-4 flex justify-center items-center">
          <div className="w-full">
            <Image
              className="w-full"
              src={profileInfo.image}
              alt="profile image"
              priority={true}
            />
          </div>
        </div>
        <div className="w-full mb-8 flex justify-center items-center">
          <div className="font-medium">{profileInfo.name}</div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant="contained">
            <Link href="/">❤️ 다시하러가기 ❤️</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
