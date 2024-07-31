import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCheckMandatory from '@/hooks/useCheckMandatory';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Header from './Header';

type Props = {};

export default function SignUpForm({}: Props) {
  const [step, setStep] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const userFormData = useSelector((state: any) => state.user_signup.value);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: 'nearest' });
  }, [step]);

  const handleNextStep = () => {
    useCheckMandatory({
      firstname: userFormData.firstname,
      lastname: userFormData.lastname,
      birthday: userFormData.birthday,
    })
      ? setStep(2)
      : setErrorMessage('Please enter your firstname, lastname and birthday');
  };

  return (
    <div className='absolute inset-0 z-10 flex h-[1000px] w-full justify-center bg-white bg-opacity-10 backdrop-blur-sm backdrop-brightness-50 md:h-full md:items-center'>
      <div className='flex h-[900px] w-full flex-col justify-start overflow-y-auto rounded-md border-2 border-grey bg-light-black md:h-[700px] md:w-[450px]'>
        <Header
          scrollRef={scrollRef}
          step={step}
          setStep={setStep}
          dispatch={dispatch}
          username={userFormData.username}
        />
        {step === 1 ? (
          <StepOne
            userFormData={userFormData}
            dispatch={dispatch}
            errorMessage={errorMessage}
            handleNextStep={handleNextStep}
          />
        ) : (
          <StepTwo
            userFormData={userFormData}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}
