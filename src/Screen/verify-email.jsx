import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

const VerifyEmail = () => {

    return (
      <div className='w-full h-screen flex flex-col box-border md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <nav className='w-screen bg-green-800 flex flex-row h-20 p-5 md:w-full'>
            <img src="Images/INEC-logo .png" alt="INEC logo" className=' basis-1/4 rounded-lg w-3 h-12'/>
            <h2 className='basis-3/4 text-white justify-center items-center text-2xl pl-3 font-normal break-normal'>Your PVC is Ready!</h2>
          </nav>
          <div className='p-3 flex flex-col'>
                <div className='flex flex-row mt-3 mb-10'>
                    <p className='font-semibold text-xl self-center'>Hello Jane </p>
                    <img src="Images/wave.jpg" alt="hello" className='w-10'/>
                </div>
                <img src="Images/card.jpg" alt="ready for collection icon" className='w-40 h-36 justify-center items-center self-center rounded-2xl mb-6 ' />
                <p className='text-xs mb-3 font-bold text-gray-800'>Your PVC is now ready for collection. Click the button to check your designated collection center to find out where you can collect it.</p>
                <Link to={'/collection'} className='w-full mt-32' >
                <Button label="Check collection center" handleClick={() => {}} />
                </Link>
          </div>
      </div>
    )
  }
  
  export default VerifyEmail;