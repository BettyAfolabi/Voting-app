import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/button';


const Personal = () =>  {
  const [value, setValue] =  React.useState('');
  
  return (
    <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
        <h2 className=' font-semibold text-xl mb-5'> Confirm your Personal Information </h2>
        <img src="Images/Jane.jpg" alt="Jane portrait" className='rounded-full w-20 h-20 ml-3 self-center' />
        <div className='my-3 flex flex-col justify-center items-center'>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>Jane Cole Broot</p>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>23-12-1998</p>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>080-002-234-09</p>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>Lagos State</p>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>Ita-oniyan</p>
          <p className='w-full h-8 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>Ikorodu</p>
          <p className='w-full h-14 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100'>House 12, Benjamin street, Ikorodu, Lagos</p>
        </div>
        <Link to={'/location'} className='w-full mt-3 mb-2 ' >
         <Button label="Proceed" handleClick={() => {}} />
        </Link>
    </div>
  );
}

export default Personal;