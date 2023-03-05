import React from "react";
import TextInput from '../components/textinput'
import { Link } from 'react-router-dom'
import Button from '../components/button';

const CheckStatus = () => {
    const [value, setValue] = React.useState('');

    return (
      <div className='w-full h-screen flex flex-col px-5 pt-8 box-border font-sans md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <h5 className=' font-medium text-2xl mb-5'>Check your PVC status</h5>
          <p className='mb-4 font-bold text-gray-800 text-sm'>Enter VIN/BVN/NIN</p>
          <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter VIN/BVN/NIN' />
          <Link to={'/verify-email'} className='w-full mt-72' >
          <Button label="check status" handleClick={() => {}} />
          </Link>
      </div>
    )
  }
  
  export default CheckStatus;