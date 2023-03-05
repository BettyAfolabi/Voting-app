import React from 'react'
import Button from '../components/button'
import Emoji from '../components/emoji'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-6'>
        <div className='w-40 h-40 rounded-full bg-green-600 mb-10 p-4'>
          <Emoji symbol="😃" label="smiling-face" class="emoji"/>
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