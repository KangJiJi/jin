import Image from 'next/image';
import Button from '@mui/material/Button';
import ProfileDefault from '/public/profile/default.png';

export default function Profile({ image, name, buttonVisibility, onClick }) {
  return (
    <div className="w-52 aspect-[1.618/1]">
      <div className="w-full mb-1 flex justify-center items-center">
        <div className="w-44">
          <Image
            className="w-full"
            src={image ? image : ProfileDefault}
            alt="profile image"
          />
        </div>
      </div>
      <div className="w-full mb-2 flex justify-center items-center">
        <div className="font-medium">{name}</div>
      </div>
      <div className="w-full flex justify-center items-center">
        {!buttonVisibility && (
          <Button
            variant="contained"
            className="aspect-[1.618/1]"
            onClick={onClick}
          >
            Select
          </Button>
        )}
      </div>
    </div>
  );
}
