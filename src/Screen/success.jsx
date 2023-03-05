import React from "react";
import { Link } from 'react-router-dom'
import Button from '../components/button';

const Success = () => {
    return (
      <div className='w-full h-screen flex flex-col items-center justify-center px-6 pt-12 box-border font-sans md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <img src="Images/sucess.jpg" alt="Sucess-logo" className='w-40 h-40 mb- 3 flex  justify-center items-center'/>
          <h1 className=' font-semibold text-2xl mt-3 mb-5'>Registration Successful</h1>
          <Link to={'/check status'} className='w-full mt-44' >
          <Button label="Okay thanks" handleClick={() => {}} />
          </Link>
      </div>
    )
  }
  
  export default Success;