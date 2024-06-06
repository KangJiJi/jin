import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Profile({ profileInfo, buttonVisibility, onClick }) {
  return (
    <div className="w-52 aspect-[1.618/1]">
      <div className="w-full mb-2 flex justify-center items-center">
        <div className="max-w-36 max-h-36">
          <Image
            className="w-auto max-h-36"
            src={profileInfo.image}
            alt="profile image"
            priority
          />
        </div>
      </div>
      <div className="w-full mb-3 flex justify-center items-center">
        <div className="font-medium">{profileInfo.name}</div>
      </div>
      <div className="w-full flex justify-center items-center">
        {!buttonVisibility && (
          <Button
            variant="contained"
            className="aspect-[2/1]"
            onClick={() => onClick(profileInfo)}
          >
            ✋ 선택 ✋
          </Button>
        )}
      </div>
    </div>
  );
}
