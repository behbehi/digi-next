import React from 'react'
import Info from './Info';
import Colors from './Colors';
import Insurance from './Insurance';
import Features from './Features';


const Product = () => {
  return (
    <div className='flex flex-col items-end gap-10 px-5 w-full'>
      <Info />
      <Colors />
      <Insurance />
      <Features />
    </div>
  );
}

export default Product