import React from 'react'
import Button from '../components/button'
import TextInput from '../components/textinput'
import { Link } from 'react-router-dom'


const Verify = () => {
  const [value, setValue] = React.useState('');
  
  return(
    <div className='w-full h-screen flex flex-col px-6 pt-12 font-sans box-border'>
        <h2 className=' font-semibold text-2xl mb-5'> Verify your Identity </h2>
        <p className='font-bold text-xs text-gray-800 mb-4'>Enter the Phone No. linked to your BVN  </p>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Phone No.' />
        <p className='font-bold text-xs text-gray-800 mb-4'>Enter Your Mother's Maiden Name</p>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Phone No.' />
        <Link to={'/Otp'} className='w-full mt-44' >
            <Button label="Verify Me" handleClick={() => {}} />
        </Link>
    </div>
  )
}  

export default Verify;