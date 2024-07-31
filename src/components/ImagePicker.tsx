import { defaultPicture } from '@/public/constants';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeProfilePicture } from '@/reducers/user_signup';

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState<string>(defaultPicture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeProfilePicture(selectedImage));
  }, [selectedImage]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex h-[300px] w-[300px] flex-col justify-between md:w-[350px]'>
      <p className='text-sm '>Select a profile picture</p>
      <div className='flex h-[250px] w-full flex-col items-center justify-around border-2 border-grey bg-dark-grey'>
        <img
          src={selectedImage}
          alt='Selected'
          className='w-[150px] self-center rounded-full'
        />
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='text-sm'
        />
      </div>
    </div>
  );
}
