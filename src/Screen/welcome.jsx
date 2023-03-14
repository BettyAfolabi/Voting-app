import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom';
import "../App.css"

const Welcome = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-6 app' >
      <div className='view'>
          <div className='flex justify-center items-center '>
            <img src='Images/happy.jpg' alt='welcome picture' className='self-center w-64 h-56 text-green-800'/>
          </div>
          <h5 className=' font-semibold text-2xl mb-2 text-center'> Welcome User </h5>
          <p className=' font-normal text-sm mb-4 text-center'> Click the button to vote </p>
          <Link to={'/auth'} className='w-full' >
          <Button label="vote" handleClick={() => {}} />
          </Link>
      </div>
    </div>
        
  )
}

export default Welcome