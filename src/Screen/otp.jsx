import React from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from 'react-router-dom'
import Button from '../components/button';
import '../App.css'


const Otp = () =>  {
  const [OTP, setOTP] =  React.useState('');
  
  return (
    <div className='w-full h-100vh flex flex-col px-5 pt-10 font-sans box-border justify-center items-center app'>
      <div className='view md:w-1/3'>
        <h2 className=' font-semibold text-2xl mb-5'> Verify your Identity </h2>
        <p className='font-bold text-xs text-gray-600 mb-6'>Enter the 6-Digit OTP sent to 080xxxxxxxxx </p>
        <img src="Images/text-icon.jpg" alt="Text logo" className='w-36 h-32 flex ml-6 mb-6 justify-center items-center self-center'/>
        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
        <p className='text-gray-600 font-medium mt-6'>Didn't receive an OTP?  
            <a href='<ResendOTP onResendClick={() => console.log("Resend clicked")} />' className='text-green-500'> Resend </a>
        </p>
        <p className='text-gray-600 font-medium text-xs mt-3'>Don't have acess to 080xxxxxxxxx?
            <Link to={'/Verify-identity'} className='w-full text-green-500' >
                Click Here
            </Link>
        </p>
        <Link to={'/personal information'} className='w-full mt-24 mb-4 ' >
        <Button label="Proceed" handleClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default Otp;