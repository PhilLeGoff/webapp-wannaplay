import React, { ComponentType } from 'react';
import { IconContext } from 'react-icons';

type Props = {
  buttonName: string;
  onClickFunction: () => void;
  Icon: ComponentType<any>;
};

export default function SocialButton({
  buttonName,
  onClickFunction,
  Icon,
}: Props) {
  return (
    <div
      className='group m-0 flex h-[45px] w-[250px] cursor-pointer items-center justify-center rounded-xl bg-white bg-gradient-to-r p-0 hover:from-grad-green hover:to-grad-blue md:h-[45px] md:w-[300px]'
      onClick={() => onClickFunction()}
    >
      <div className=' m-0 flex h-[43px] w-[248px] items-center justify-around  rounded-xl bg-light-black p-0 md:h-[43px] md:w-[298px]'>
        <span className='text-white hover:text-[#02FFC2]'>
          <Icon
            size='18px'
            className='group-hover:text-[#02FFC2]'
            onMouseOver={(event: any) =>
              ((event.target as HTMLElement).style.color = '#02FFC2')
            }
            onMouseOut={(event: any) =>
              ((event.target as HTMLElement).style.color = 'white')
            }
          />
        </span>
        <span className='mr-3 text-sm text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0'>
          {buttonName}
        </span>
      </div>
    </div>
  );
}
