import Button from '@/components/Button';
import { showSignUp } from '@/reducers/modals';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './signIn/SignIn';
import SignUpModal from './signUp/SignUpModal';

type Props = {};

export default function Hero({}: Props) {
  const dispatch = useDispatch();
  const modalStates = useSelector((state: any) => state.modals.value);

  useEffect(() => {
    console.log('signIn', modalStates.signIn);
  }, [modalStates]);
  return (
    <div
      className={
        'bg-red-700 relative flex w-full flex-col bg-black text-lg md:h-full md:flex-grow md:flex-row'
      }
    >
      <div
        className={
          'flex h-[400px] w-full flex-col items-center justify-center md:h-full md:w-1/2 md:pl-64'
        }
      >
        <h2 className='text-center text-3xl text-white md:p-4 md:text-4xl'>
          WELCOME TO
        </h2>
        <h1 className='bg-gradient-to-r from-grad-green to-grad-blue bg-clip-text p-4 text-center text-4xl font-bold text-black text-opacity-0 md:text-5xl'>
          WANNAPLAY
        </h1>
        <span className='text:xl p-4 px-4 text-center text-white md:px-0 md:text-2xl'>
          Music lover? Sign up & connect with musicians near you!
        </span>
        <Button
          buttonName='SIGN UP'
          onClickFunction={() => dispatch(showSignUp(true))}
        />
      </div>
      <div
        className={
          'flex-column flex h-full w-full items-center justify-center md:w-1/2'
        }
      >
        <div className='relative h-[600px] w-[350px] md:h-full md:w-[500px]'>
          <Image
            src='/wannaplay_app.png'
            fill={true}
            alt='wannaplay app image'
          />
        </div>
      </div>
      {modalStates.signUp.display && <SignUpModal />}
      {modalStates.signIn.display && <SignIn />}
    </div>
  );
}
