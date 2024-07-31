import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import Button from '@/components/Button';
import { useDispatch } from 'react-redux';
import { showSignIn } from '@/reducers/modals';

type Props = {};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <header
      className={
        'flex h-24 w-full items-center justify-between border-b-2 border-grey bg-black text-lg md:h-32'
      }
    >
      <div
        className={
          'relative ml-5 flex h-full items-center md:w-1/3 md:justify-center'
        }
      >
        <div className={'relative flex h-10 w-56 md:ml-6 md:h-12 md:w-72'}>
          <Image src='/wannaplay.png' fill={true} alt='Logo' />
        </div>
      </div>
      <div
        className={`h-58 z-30 w-full md:h-full md:w-1/3
        ${menuOpen ? 'static' : 'hidden'} 
          bg-light-dark absolute left-0 top-24 flex flex-col items-center bg-light-black bg-opacity-60 md:static md:mr-10 md:mt-0 md:flex md:flex-row md:justify-around md:space-x-4 md:bg-black md:bg-opacity-100 `}
      >
        <Link
          className={
            'my-3 font-normal text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0'
          }
          href='home'
        >
          HOME
        </Link>
        <Link
          className={
            'my-3 font-normal text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0'
          }
          href='about'
        >
          ABOUT
        </Link>
        <Button
          buttonName='SIGN IN'
          onClickFunction={() => {
            dispatch(showSignIn(true));
            setMenuOpen(!menuOpen);
          }}
        />
      </div>
      <div className='mr-5 md:hidden'>
        {menuOpen ? (
          <IoClose
            onClick={() => setMenuOpen(!menuOpen)}
            color='white'
            size='2.5rem'
          />
        ) : (
          <FiMenu
            onClick={() => setMenuOpen(!menuOpen)}
            color='white'
            size='2.5rem'
          />
        )}
      </div>
    </header>
  );
}
