import React from 'react';

type Props = {
  buttonName: string;
  onClickFunction: any;
};

export default function SignButton({ buttonName, onClickFunction }: Props) {
  return (
    <div
      className='group m-0 flex h-[45px] w-[250px] cursor-pointer items-center justify-center rounded-xl bg-white bg-gradient-to-r p-0 hover:from-grad-green hover:to-grad-blue md:h-[45px] md:w-[300px] '
      onClick={() => onClickFunction()}
    >
      <div className='m-0 flex h-[43px] w-[248px] flex-col items-center justify-center rounded-xl bg-light-black p-0 md:h-[43px] md:w-[298px]'>
        <span className='text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0'>
          {buttonName}
        </span>
      </div>
    </div>
  );
}
