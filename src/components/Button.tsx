// Button.tsx
import React from 'react';

type Props = {
  buttonName: string;
  onClickFunction: () => void;
};

export default function Button({ buttonName, onClickFunction }: Props) {
  return (
    <div
      className='group my-3 mb-6 h-14 cursor-pointer rounded-xl bg-white bg-gradient-to-r p-[3px] hover:from-grad-green hover:to-grad-blue hover:p-[4px] md:mb-3'
      onClick={onClickFunction}
    >
      <div className='flex h-full flex-col items-center justify-center rounded-lg bg-black p-6'>
        <span className='text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0'>
          {buttonName}
        </span>
      </div>
    </div>
  );
}
