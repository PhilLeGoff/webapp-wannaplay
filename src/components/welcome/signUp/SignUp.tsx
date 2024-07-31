import Input from '@/components/Input';
import { checkFields } from '@/hooks/checkFields';
import handleEmailVerification from '@/hooks/handleEmailVerification';
import { storeInitialData } from '@/reducers/user_signup';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import SignButton from './SignButton';
import SocialButton from './SocialButton';
import { IoClose } from 'react-icons/io5';
import { showSignUp } from '@/reducers/modals';

type Props = {};

interface UserData {
  username: string;
  email: string;
  password: string;
}

export default function SignUp({}: Props) {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleStateChange = (
    fieldName: keyof UserData,
    value: string
  ): void => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    console.log('check session ', session?.user);

    if (session) {
      const verifyEmail = async () => {
        try {
          const response = await handleEmailVerification(session?.user?.email);
          if (response.success) {
            dispatch(
              storeInitialData({
                username: session?.user?.name,
                email: session?.user?.email,
                profilePicture: session?.user?.image,
                method: 'google',
                password: null,
              })
            );
            // Next step
          } else setErrorMessage('Email already registered');
        } catch (error) {
          console.error('Error during email verification:', error);
        }
      };

      verifyEmail();
    }
  }, [session]);

  const handleNextAuth = () => {
    signIn('google');
  };

  const handleSignUp = async () => {
    if (
      checkFields([userData.email, userData.password, userData.username]) ===
      false
    ) {
      setErrorMessage('Please fill in all the fields');
      return;
    } else {
      console.log("before")
      const response = await handleEmailVerification(userData.email);
      console.log(response);
      if (response.success) {
        dispatch(
          storeInitialData({
            username: userData.username,
            email: userData.email,
            profilePicture:
              'https://res.cloudinary.com/dr2opzcia/image/upload/v1679595811/profilepic_kyzsdc.jpg', // Sets up a default image picture
            method: 'manual',
            password: userData.password,
          })
        );
        // Next step
      } else setErrorMessage('Email already registered');
    }
  };
  return (
    <div
      className={`absolute inset-0 z-10 flex h-[700px] w-full justify-center bg-white bg-opacity-10 backdrop-blur-sm backdrop-brightness-50
     md:h-full md:items-center `}
    >
      <div
        className={`flex h-[570px] w-full flex-col justify-start overflow-y-scroll rounded-md border-2 border-grey bg-light-black md:h-[570px] md:w-[450px] `}
      >
        <header className='mb-4 flex w-full items-center justify-around md:h-[70px]'>
          <div className='flex h-[70px] w-[70px] items-center justify-center'>
            {/* <FaArrowLeft color='white' size='25px' /> */}
          </div>
          <span className=' flex h-full flex-grow items-center justify-center text-lg text-white  md:text-xl'>
            Create your account
          </span>
          <div className='flex h-[70px] w-[70px] items-center justify-center'>
            <IoClose
              onClick={() => dispatch(showSignUp(false))}
              color='white'
              size='37px'
              onMouseOver={(event: any) =>
                ((event.target as HTMLElement).style.color = '#02FFC2')
              }
              onMouseOut={(event: any) =>
                ((event.target as HTMLElement).style.color = 'white')
              }
            />
          </div>
        </header>
        <div className='flex h-[580] flex-col items-center justify-start'>
          <div className='flex h-[250px] flex-col items-center justify-around md:h-[240px] md:w-[600] '>
            <div className='mb-4'>
              {/* <p className={'text-sm'}>Username</p> */}
              <Input
                value={userData.username}
                setState={(value: string) =>
                  handleStateChange('username', value)
                }
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='mb-4'>
              <Input
                value={userData.email}
                setState={(value: string) => handleStateChange('email', value)}
                type='email'
                placeholder='Email'
              />
            </div>
            <div>
              <Input
                value={userData.password}
                setState={(value: string) =>
                  handleStateChange('password', value)
                }
                type='password'
                placeholder='Password'
              />
            </div>
          </div>
          <div className={`flex w-full flex-col items-center justify-start`}>
            <p className='bottom-28 mb-4 flex h-5 justify-center text-sm text-red md:static md:bottom-0 md:w-[300px] md:place-self-center md:self-center'>
              {errorMessage}
            </p>
            <SignButton buttonName='SIGN UP' onClickFunction={handleSignUp} />
            <div className='mb-3 mt-5 flex w-full items-center justify-around'>
              <hr className='h-[1px] w-[100px] border-none bg-[#79808c] md:w-[150px]' />
              <p className='text-sm text-[#79808c]'>Or sign up with</p>
              <hr className='h-[1px] w-[100px] border-none bg-[#79808c] md:w-[150px]' />
            </div>
          </div>
          <div className={`flex h-[75px] flex-col items-center justify-around`}>
            <SocialButton
              buttonName='Sign up with Google'
              onClickFunction={() => handleNextAuth()}
              Icon={FaGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
