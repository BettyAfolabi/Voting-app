import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/button';
import TextInput from '../components/textinput';

const Collection = () => {
    const [value, setValue] = React.useState('');

    return (
      <div className='w-full h-screen flex flex-col font-sans p-3 md:w-1/3 md:h-2/4 md:my-20 md:p-8 md:mx-auto md:items-center  md:bg-green-50 md:rounded-3xl'>
          <h3 className='text-2xl font-semibold mt-4 mb-4'>PVC Status</h3>
          <div className='justify-center items-center  self-center font-semibold'>
            <img src="Images/picture.jpg" alt="User's picture" className='rounded-full w-20 h-20 ml-3' />
            <h5 className='pb-2 pt-2 text-gray-800'>Hello User's Name</h5>
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
          <Link to={'/home'} className='w-full mt-14' >
            <Button label="Close" handleClick={() => {}} />
          </Link>
      </div>
    )
  }
  
  export default Collection;