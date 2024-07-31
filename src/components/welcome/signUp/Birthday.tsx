import { ISignUpDataValue } from '@/interfaces/ISignUpData';
import { days, months, years } from '@/public/birthday';
import {
  storeBirthDay,
  storeBirthMonth,
  storeBirthYear,
} from '@/reducers/user_signup';
import { useEffect, useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';
import { useDispatch } from 'react-redux';

type Props = {
  userFormData: ISignUpDataValue;
};

interface IMonth {
  name: string;
  number: number;
}

export default function Birthday({ userFormData }: Props) {
  const [showDaySelector, setShowDaySelector] = useState<boolean>(false);
  const [showMonthSelector, setShowMonthSelector] = useState<boolean>(false);
  const [showYearSelector, setShowYearSelector] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Funciton for day & year selection
  const selectionBirthdayBox = (
    choices: string[],
    setFunction: (choice: string) => void
  ) => {
    return choices.map((choice) => {
      return (
        <section
          className='min-h-[25px] w-full text-sm'
          onClick={() => {
            setFunction(choice);
          }}
        >
          {choice}
        </section>
      );
    });
  };

  // Function for months selection 
  const selectionMonthsBox = (
    choices: IMonth[],
    setFunction: (choice: string) => void
  ) => {
    return choices.map((choice) => {
      return (
        <section
          className='min-h-[25px] w-full text-sm'
          onClick={() => {
            setFunction(choice.name);
          }}
        >
          {choice.name}
        </section>
      );
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowDaySelector(false);
      setShowMonthSelector(false);
      setShowYearSelector(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleStoreBirthDay = (day: string) => {
    dispatch(storeBirthDay(day));
    setShowDaySelector(false);
  };

  const handleStoreBirthMonth = (month: string) => {
    dispatch(storeBirthMonth(month));
    setShowMonthSelector(false);
  };

  const handleStoreBirthYear = (year: string) => {
    dispatch(storeBirthYear(year));
    setShowYearSelector(false);
  };

  return (
    <div className='mt-2 flex w-full flex-row items-start justify-between'>
      {/* DAY SELECTOR */}
      <div>
        <div
          className={`flex h-[45px] w-[75px] cursor-pointer flex-col items-center justify-center rounded-sm bg-grey focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue`}
        >
          <div
            className='group relative flex h-[41px] w-[71px] items-center justify-around rounded-sm bg-dark-grey p-1 text-sm text-white outline-none '
            onClick={() => setShowDaySelector(!showDaySelector)}
          >
            {userFormData.birthday.day ? userFormData.birthday.day : 'Day'}

            <GoTriangleUp
              size='20px'
              className={`${
                showDaySelector ? 'rotate-180' : 'rotate-0'
              } transition-all`}
            />
          </div>
        </div>
        {showDaySelector && (
          <div className='relative'>
            <div className='z-100 absolute z-50 flex h-[130px] min-w-[75px] flex-col overflow-y-scroll rounded-b-md bg-grey pl-3 md:h-[150px] md:w-[60px]'>
              {selectionBirthdayBox(days, handleStoreBirthDay)}
            </div>
          </div>
        )}
      </div>
      {/* MONTH SELECTOR */}
      <div>
        <div
          className={`flex h-[45px] w-[95px] cursor-pointer flex-col items-center justify-center rounded-sm bg-grey focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue`}
        >
          <div
            className='group relative flex h-[41px] w-[91px] items-center justify-around rounded-sm bg-dark-grey p-1 text-sm text-white outline-none  '
            onClick={() => setShowMonthSelector(!showMonthSelector)}
          >
            {userFormData.birthday.month.name
              ? userFormData.birthday.month.name
              : 'Month'}
            <GoTriangleUp
              size='20px'
              className={`${
                showMonthSelector ? 'rotate-180' : 'rotate-0'
              } transition-all`}
            />
          </div>
        </div>
        {showMonthSelector && (
          <div className='relative'>
            <div className='z-100 absolute z-50 flex h-[130px] min-w-[95px] flex-col overflow-y-scroll rounded-b-md bg-grey pl-2 text-sm md:h-[150px] md:w-[70px]'>
              {selectionMonthsBox(months, handleStoreBirthMonth)}
            </div>
          </div>
        )}
      </div>
      {/* YEAR SELECTOR */}
      <div>
        <div
          className={`flex h-[45px] w-[85px] cursor-pointer flex-col items-center justify-center rounded-sm bg-grey focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue`}
        >
          <div
            className='group relative flex h-[41px] w-[81px] items-center justify-around rounded-sm bg-dark-grey p-1 text-sm text-white outline-none'
            onClick={() => setShowYearSelector(!showYearSelector)}
          >
            {userFormData.birthday.year ? userFormData.birthday.year : 'Year'}

            <GoTriangleUp
              size='20px'
              className={`${
                showYearSelector ? 'rotate-180' : 'rotate-0'
              } transition-all`}
            />
          </div>
        </div>
        {showYearSelector && (
          <div className='relative'>
            <div className=' z-100 absolute z-50 flex h-[130px] min-w-[85px] flex-col overflow-y-scroll rounded-b-md bg-grey pl-2 text-sm md:h-[150px] md:w-[70px]'>
              {selectionBirthdayBox(years, handleStoreBirthYear)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
