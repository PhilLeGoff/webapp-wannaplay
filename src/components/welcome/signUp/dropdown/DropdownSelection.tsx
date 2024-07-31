import { useEffect, useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';
import SelectionBox from './SelectionBox';
import { signOut } from 'next-auth/react';

type Props = {
  dropdownTitle: string;
  choices: string[];
  arrayState: string[];
  onStoreData: (instrument: string) => void;
};

export default function DropdownSelection({
  dropdownTitle,
  choices,
  arrayState, // redux state
  onStoreData, // redux function
}: Props) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  // lists all selected choices
  const selectedList = (list: string[]) => {
    return (
      <div className='align-center flex h-[30px] w-[200px] justify-start overflow-x-scroll scrollbar-hide '>
        {list.map((e: string) => (
          <div
            key={e}
            className='h-full w-min rounded-md p-1 pb-2 text-sm text-white'
          >
            {e}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='py-2'>
      <p className=' flex w-full justify-start pb-1'>{dropdownTitle}</p>
      <div
        className={`mt-1 flex h-[45px] w-[250px] cursor-pointer flex-col items-center justify-center rounded-sm bg-grey focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue md:w-[300px]`}
      >
        <div
          className='group relative flex h-[41px] w-[246px] items-center justify-around rounded-sm bg-dark-grey p-1 text-sm text-white outline-none md:w-[296px] '
          onClick={() => setShowOptions(!showOptions)}
        >
          {arrayState.length > 0 ? (
            selectedList(arrayState)
          ) : (
            <div className='align-center flex h-[30px] w-[200px] justify-start overflow-x-scroll p-1 scrollbar-hide md:w-[256px]'>
              Select here
            </div>
          )}
          <GoTriangleUp
            size='20px'
            className={`${
              showOptions ? 'rotate-180' : 'rotate-0'
            } w-[30px] transition-all`}
          />
        </div>
      </div>
      {showOptions && (
        <div className='relative'>
          <SelectionBox
            choices={choices}
            selectedArray={arrayState}
            arrayName='genresPlayed'
            onStoreData={onStoreData}
            setDisplay={setShowOptions}
          />
        </div>
      )}
    </div>
  );
}
