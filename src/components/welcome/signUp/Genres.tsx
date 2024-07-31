import { useAddToArray, useDeleteFromArray } from '@/hooks/useArrays';
import { UserData } from '@/interfaces/UserData';
import { popularGenres } from '@/public/genres';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeGenresLiked, storeGenresPlayed } from '@/reducers/user_signup';
import DropdownSelection from './dropdown/DropdownSelection';
import { ISignUpDataValue } from '@/interfaces/ISignUpData';

type Props = { userFormData: ISignUpDataValue };

export default function Genres({ userFormData }: Props) {
  const dispatch = useDispatch();

  const handleStoreGenresPlayed = (instrument: string) => {
    dispatch(storeGenresPlayed(instrument));
  };

  const handleStoreGenresLiked = (instrument: string) => {
    dispatch(storeGenresLiked(instrument));
  };

  return (
    <div className='flex min-h-[200px] w-full flex-col items-center justify-around  text-sm md:h-[200px] pb-0 pt-0'>
      <DropdownSelection
        dropdownTitle='Genres played'
        choices={popularGenres}
        arrayState={userFormData.genresPlayed}
        onStoreData={handleStoreGenresPlayed}
      />
      <DropdownSelection
        dropdownTitle='Genres liked'
        choices={popularGenres}
        arrayState={userFormData.genresLiked}
        onStoreData={handleStoreGenresLiked}
      />
    </div>
  );
}
