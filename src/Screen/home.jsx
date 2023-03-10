import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-6 md:w-80 md:h-96 md:p-10 md:my-10 md:mx-auto md:bg-green-50 md:rounded-3xl'>
        <div className='w-40 h-40 rounded-full bg-green-600 mb-10 p-4'>
          <img src='Images/welcome.png' alt='welcome picture' className='self-center w-36 h-32 '/>
        </div>
        <h5 className=' font-semibold text-2xl mb-2'> Welcome User </h5>
        <p className=' font-normal text-sm mb-4 '> Click the button to vote </p>
        <Link to={'/auth'} className='w-full' >
        <Button label="vote" handleClick={() => {}} />
        </Link>
    </div>
  )
}

export default Home