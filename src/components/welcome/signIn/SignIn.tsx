import Button from '@/components/Button';
import Input from '@/components/Input';
import SignButton from '../../SignButton';
import SocialButton from '../../SocialButton';
import { IoClose } from 'react-icons/io5';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSession, signIn } from 'next-auth/react';
import { showSignIn } from '@/reducers/modals';
import React, { useState } from 'react';

interface UserData {
  username: string;
  password: string;
}

export default function SignIn() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  async function postSignIn() {
    // API call logic goes here
  }

  const handleStateChange = (fieldName: string, fieldValue: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className='absolute inset-0 z-10 flex h-full w-full justify-center bg-white bg-opacity-10 backdrop-blur-sm backdrop-brightness-50 md:items-center'>
      <div className='flex h-[510px] w-full flex-col justify-start rounded-md border-2 border-grey bg-light-black md:h-[510px] md:w-[450px]'>
        <header className='mt-2 flex h-[60px] w-full items-center justify-center'>
          <span className='ml-[70px] flex h-full flex-grow items-center justify-center text-xl text-white md:ml-[70px] md:text-2xl'>
            SIGN IN
          </span>
          <div className='flex h-[70px] w-[70px] items-center justify-center'>
            <IoClose
              onClick={() => dispatch(showSignIn(false))}
              size='37px'
              onMouseOver={(event) =>
                ((event.target as HTMLDivElement).style.color = '#02FFC2')
              }
              onMouseOut={(event) =>
                ((event.target as HTMLDivElement).style.color = 'white')
              }
            />
          </div>
        </header>
        <div className='mt-3 flex w-full min-h-[200px] flex-col items-center justify-around'>
          <div className='mb-4'>
            <Input
              value={userData.username}
              setState={(value) => handleStateChange('username', value)}
              type='text'
              placeholder='Email / Username'
            />
          </div>
          <div>
            <Input
              value={userData.password}
              setState={(value) => handleStateChange('password', value)}
              type='password'
              placeholder='Password'
            />
          </div>
        </div>
        <div className='flex h-[150px] w-full flex-col items-center justify-around'>
          <p className='bottom-28 flex h-5 justify-center text-sm text-red md:static md:bottom-0 md:w-[300px] md:place-self-center md:self-center'>
            {errorMessage}
          </p>
          <SignButton buttonName='SIGN IN' onClickFunction={postSignIn} />
          <div className='m-3 mt-3 min-h-[50px] flex w-full items-center justify-around'>
            <hr className='h-[1px] w-[100px] border-none bg-[#79808c] md:w-[150px]' />
            <p className='text-sm text-[#79808c]'>Or login with</p>
            <hr className='h-[1px] w-[100px] border-none bg-[#79808c] md:w-[150px]' />
          </div>
        </div>
        <div className='flex h-[160px] flex-col items-center justify-around p-1 pb-6'>
          <SocialButton
            buttonName='Sign in with Google'
            onClickFunction={() => signIn('google')}
            Icon={FaGoogle}
          />
        </div>
      </div>
    </div>
  );
}
