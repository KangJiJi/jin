import Image from 'next/image';
import Button from '@mui/material/Button';
import IconProfile from '/public/icons/profile.png';

export default function Profile() {
  return (
    <div className="w-50 aspect-[1.618/1]">
      <div className="w-full mb-3 flex justify-center">
        <Image className="w-40" src={IconProfile} alt="vs" priority />
      </div>
      <div className="w-full flex justify-center items-center">
        <Button variant="contained" className="aspect-[1.618/1]">
          Select
        </Button>
      </div>
    </div>
  );
}
