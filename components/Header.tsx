import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <div className='p-5 flex flex-col justify-center  w-full bg-[#F7A0BA]'>
      <h1 className='text-xl text-gray'>Notepad</h1>
    </div>
  );
}

export default Header;
