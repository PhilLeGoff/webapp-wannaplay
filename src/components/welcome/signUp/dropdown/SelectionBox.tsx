import { useAddToArray, useDeleteFromArray } from '@/hooks/useArrays';
import { UserData } from '@/interfaces/UserData';
import React from 'react';

type SelectionBoxProps = {
  choices: string[];
  selectedArray: string[];
  arrayName: keyof UserData;
  onStoreData: (instrument: string) => void;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectionBox: React.FC<SelectionBoxProps> = ({
  choices,
  selectedArray,
  arrayName,
  onStoreData,
  setDisplay,
}) => {

  return (
    <div className='pt-2 absolute z-50 flex h-[150px] w-[250px] flex-col overflow-y-scroll rounded-b-md bg-grey opacity-90 md:w-[300px]'>
      {choices.map((choice) => {
        const isSelected = selectedArray.includes(choice);

        return (
          <section
            key={choice}
            className={`w-full min-h-[30px] cursor-pointer px-2 text-sm ${isSelected ? 'text-[#02FFC2]' : 'text-white'}`}
            onClick={() => {
              onStoreData(choice);
              setDisplay(false);
            }}
          >
            {choice}
          </section>
        );
      })}
    </div>
  );
};

export default SelectionBox;
