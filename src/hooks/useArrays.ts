import { UserData } from '@/interfaces/UserData';
import React from 'react';

type Props = {
  arrayName: keyof UserData;
  value: string;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export function useAddToArray({ arrayName, value, setUserData }: Props) {
  setUserData((prevData) => ({
    ...prevData,
    [arrayName]: [...(prevData[arrayName] as string[]), value],
  }));
}

export function useDeleteFromArray({ arrayName, value, setUserData }: Props) {
  setUserData((prevData) => ({
    ...prevData,
    [arrayName]: (prevData[arrayName] as string[]).filter(
      (item) => item !== value
    ),
  }));
}
