import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl' >
          <div className='flex justify-center items-center '>
            <img src='Images/happy.jpg' alt='welcome picture' className='self-center w-64 h-56 text-green-800'/>
          </div>
          <h5 className=' font-semibold text-2xl mb-2 text-center'> Welcome User </h5>
          <p className=' font-normal text-sm mb-4 text-center'> Click the button to vote </p>
          <Link to={'/auth'} className='w-full' >
          <Button label="vote" handleClick={() => {}} />
          </Link>
    </div>
        
  )
}

export default Welcome