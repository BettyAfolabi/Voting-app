import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/button';

const Collection = () => {
    const [value, setValue] = React.useState('');

    return (
      <div className='w-full h-screen flex flex-col font-sans p-3  md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <h3 className='text-2xl font-semibold mt-4 mb-4'>PVC Status</h3>
          <div className='justify-center items-center  self-center font-semibold'>
            <img src="Images/Jane.jpg" alt="Jane portrait" className='rounded-full w-20 h-20 ml-3' />
            <h5 className='pb-2 pt-2'>Hello Jane Broot</h5>
            <h5>20-03-45-098</h5>
          </div>
          <p className='mt-3 text-sm font-semibold pb-2'>Polling Unit</p>  
          <p className='w-full h-14 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100 text-gray-700'>House 12, Benjamin street, Ikorodu, Lagos</p>
          <p className='mt-1 text-sm font-semibold pb-2'>Collection Center</p>
          <p className='w-full h-14 rounded-md border-1 border-gray-200 p-2 mb-2 bg-gray-100 text-gray-700'>House 12, Benjamin street, Ikorodu, Lagos</p>
          <p className='text-gray-600 font-light '>Change collection center? 
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