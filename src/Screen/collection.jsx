import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/button';
import TextInput from '../components/textinput';
import '../App.css'

const Collection = () => {
    const [value, setValue] = React.useState('');

    return (
      <div className='w-full h-screen flex flex-col font-sans justify-center items-center app'>
        <div className='view'>
         <h3 className='text-2xl font-semibold mb-3'>PVC Status</h3>
          <div className='justify-center items-center  self-center font-semibold'>
            <div className='flex justify-center items-center'>
              <img src="Images/picture.jpg" alt="User's picture" className='rounded-full w-20 h-20 ml-3' />
            </div>
            <h5 className='pb-2 pt-2 text-gray-800 text-center'>Hello User's Name</h5>
            <h5 className=' text-center text-gray-800'>User's no</h5>
          </div>
          <p className='mt-3 text-sm font-semibold pb-2 md:text-lg md:pt-4'>Polling Unit</p>  
          <TextInput value={value} placeholder="Chosen Polling Unit" onChange={setValue}/>
          <p className='mt-1 text-sm font-semibold pb-2 md:text-lg md:pt-4'>Collection Center</p>
          <TextInput value={value} placeholder="Chosen Collection Center" onChange={setValue}/>

          <p className='text-gray-600 font-light mt-5'>Change collection center? 
            <Link to={'/Location'} className='w-full text-green-500' >
                 Resend
            </Link>
          </p>
          <Link to={'/'} className='w-full' >
            <Button label="Close" handleClick={() => {}} />
          </Link>
        </div>
          
      </div>
    )
  }
  
  export default Collection;