import { ISignUpDataValue } from '@/interfaces/ISignUpData';
import { popularInstruments } from '@/public/instruments';
import {
  storeInstrumentPlayed,
  storeInstrumentTaught,
} from '@/reducers/user_signup';
import { useDispatch } from 'react-redux';
import DropdownSelection from './dropdown/DropdownSelection';

type Props = { userFormData: ISignUpDataValue };

export default function Instruments({ userFormData }: Props) {
  const dispatch = useDispatch();

  const handleStoreInstrumentPlayed = (instrument: string) => {
    dispatch(storeInstrumentPlayed(instrument));
  };

  const handleStoreInstrumentTaught = (instrument: string) => {
    dispatch(storeInstrumentTaught(instrument));
  };

  return (
    <div className='flex min-h-[200px] w-full flex-col items-center justify-around  text-sm md:h-[200px] pb-0 pt-0'>
      <DropdownSelection
        dropdownTitle='Instrument played'
        choices={popularInstruments}
        arrayState={userFormData.instrumentPlayed}
        onStoreData={handleStoreInstrumentPlayed}
      />
      <DropdownSelection
        dropdownTitle='Instrument taught'
        choices={popularInstruments}
        arrayState={userFormData.instrumentTaught}
        onStoreData={handleStoreInstrumentTaught}
      />
    </div>
  );
}
