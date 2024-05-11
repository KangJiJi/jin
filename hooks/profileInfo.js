import { useState } from 'react';
import ProfileDefault from '@/public/profile/default.png';

const initialProfileData = {
  idx: 0,
  name: '',
  image: ProfileDefault,
};

function useProfileData() {
  const [profileData, setProfileData] = useState(initialProfileData);

  return [profileData, setProfileData];
}

export default useProfileData;
