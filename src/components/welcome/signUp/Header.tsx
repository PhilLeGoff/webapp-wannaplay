import { FaArrowLeft } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Dispatch } from 'react';
import { showSignUp } from '@/reducers/modals';

type HeaderProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
  step: number;
  setStep: (step: number) => void;
  dispatch: Dispatch<any>;
  username: string;
};

const Header = ({ scrollRef, step, setStep, dispatch, username }: HeaderProps) => (
  <header
    ref={scrollRef}
    className="mb-4 flex w-full items-center justify-around md:h-[70px]"
  >
    <div className="flex h-[70px] w-[70px] items-center justify-center">
      {step === 2 && (
        <FaArrowLeft
          color="white"
          size="25px"
          onClick={() => setStep(1)}
          className="hover:cursor-pointer"
        />
      )}
    </div>
    <span className="flex h-full flex-grow items-center justify-center text-lg text-white md:text-xl">
      {`Welcome ${username}`}
    </span>
    <div className="flex h-[70px] w-[70px] items-center justify-center">
      <IoClose
        onClick={() => dispatch(showSignUp(false))}
        className="hover:cursor-pointer"
        color="white"
        size="37px"
        onMouseOver={(event: any) =>
          ((event.target as HTMLElement).style.color = '#02FFC2')
        }
        onMouseOut={(event: any) =>
          ((event.target as HTMLElement).style.color = 'white')
        }
      />
    </div>
  </header>
);

export default Header;
