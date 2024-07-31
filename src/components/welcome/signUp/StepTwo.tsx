import { Dispatch } from 'react';
import ImagePicker from '@/components/ImagePicker';
import SignButton from './SignButton';
import { storeDescription } from '@/reducers/user_signup';
import handleFormSending from '@/hooks/handleFormSending';

type StepTwoProps = {
  userFormData: any; // Replace 'any' with the appropriate type
  dispatch: Dispatch<any>;
};

const handleSendForm = () => {
  
}

const StepTwo = ({ userFormData, dispatch }: StepTwoProps) => (
  <div className='flex h-[1000px] w-full flex-col items-center justify-around overflow-y-scroll md:min-h-[700px]'>
    <div className='flex min-h-[200px] flex-col overflow-y-scroll'>
      <p className='p-2 pb-4 pl-2 text-sm'>
        Write a small description about yourself:
      </p>
      <textarea
        className='h-[300px] w-[300px] self-center border-2 border-grey bg-white bg-opacity-5 p-2 text-start text-sm text-white outline-none md:h-[200px] md:w-[350px]'
        placeholder='Type here'
        value={userFormData.description}
        onChange={(event) => dispatch(storeDescription(event.target.value))}
      />
    </div>
    <ImagePicker />
    <SignButton buttonName='FINISH' onClickFunction={() => handleFormSending(userFormData)} />
  </div>
);

export default StepTwo;
