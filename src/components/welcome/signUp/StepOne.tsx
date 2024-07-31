import { Dispatch } from 'react';
import Input from '../../Input';
import Birthday from './Birthday';
import Genres from './Genres';
import Instruments from './Instruments';
import SignButton from './SignButton';
import { storeFirstname, storeLastname } from '@/reducers/user_signup';

type StepOneProps = {
  userFormData: any; // Replace 'any' with the appropriate type
  dispatch: Dispatch<any>;
  errorMessage: string;
  handleNextStep: () => void;
};

const StepOne = ({
  userFormData,
  dispatch,
  errorMessage,
  handleNextStep,
}: StepOneProps) => (
  <div className='mt-0 flex h-[800px] flex-col items-center justify-start md:min-h-[800px]'>
    <div className='mb-3 flex h-[150px] w-full flex-col items-center justify-around'>
      <div className='relative my-2'>
        <Input
          value={userFormData.firstname}
          setState={(value: string) => dispatch(storeFirstname(value))}
          type='text'
          placeholder='Firstname'
        />
      </div>
      <div className='my-3'>
        <Input
          value={userFormData.lastname}
          setState={(value: string) => dispatch(storeLastname(value))}
          type='text'
          placeholder='Lastname'
        />
      </div>
    </div>
    <div className='mt-1 flex min-h-[100px] w-[300px] flex-col items-start justify-center text-white'>
      <p className='flex w-[274px] justify-between pb-1 pl-[26px] text-sm md:w-full md:pb-3 md:pl-0'>
        Date of birth
      </p>
      <Birthday userFormData={userFormData} />
    </div>
    <div className='flex min-h-[380px] w-full flex-col items-start justify-around pt-2 md:min-w-full'>
      <Instruments userFormData={userFormData} />
      <Genres userFormData={userFormData} />
    </div>
    <div className='flex min-h-[100px] w-full flex-col items-center justify-center'>
      <p className='min-h-[40px] pb-4 text-sm text-red'>
        {errorMessage ? errorMessage : null}
      </p>
      <SignButton buttonName='NEXT' onClickFunction={handleNextStep} />
    </div>
  </div>
);

export default StepOne;
