import React from "react";
import { Link } from 'react-router-dom'
import Button from '../components/button';

const Success = () => {
    return (
      <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <div className="flex justify-center items-center">
          <img src="Images/happy.jpg" alt="Sucess-logo" className='w-56 h-56 mb-3 '/>
          </div>
          <h1 className=' font-semibold text-2xl mt-3 text-center  md:text-center md:pt-5'>Registration Successful</h1>
          <Link to={'/check status'} className='w-full mt-44' >
            <Button label="Okay thanks" handleClick={() => {}} />
          </Link>
      </div>
    )
  }
  
  export default Success;