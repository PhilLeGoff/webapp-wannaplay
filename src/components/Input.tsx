// Input.tsx
import React from 'react';

interface Props {
  setState: React.Dispatch<any>;
  type: string;
  value: string;
  placeholder: string;
}

export default function Input({ setState, type, value, placeholder }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setState(newValue);
  };

  return (
    // <div className='h-[45px] w-[250px] rounded-sm bg-grey focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue md:h-[45px] md:w-[300px]'>
    <div className="relative flex flex-col">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className='peer placeholder-text-sm placeholder-opacity-0 placeholder-grey w-[250px] rounded-b-sm bg-light-black  text-sm text-white border-b-[1px] border-grey focus:border-grad-green outline-none h-10 md:w-[300px]'
      />
      <label htmlFor="email" className=" peer-placeholder-shown:text-md peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 absolute left-0 -top-3.5 text-white text-sm ">{placeholder}</label>
    </div>
  );
}

