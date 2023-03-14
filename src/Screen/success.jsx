import React from "react";
import { Link } from 'react-router-dom'
import Button from '../components/button';
import '../App.css'

const Success = () => {
    return (
      <div className='w-full h-screen flex flex-col items-center justify-center app'>
        <div className="view">
          <div className="flex justify-center items-center">
          <img src="Images/happy.jpg" alt="Sucess-logo" className='w-56 h-56 mb-3 '/>
          </div>
          <h1 className=' font-semibold text-2xl mt-3 mb-5 md:text-center md:pt-5'>Registration Successful</h1>
          <Link to={'/check status'} className='w-full mt-44' >
            <Button label="Okay thanks" handleClick={() => {}} />
          </Link>
        </div>
      </div>
    )
  }
  
  export default Success;