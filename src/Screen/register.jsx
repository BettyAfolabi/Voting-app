import React from 'react'
import Button from '../components/button'
import TextInput from '../components/textinput'
import { Link } from 'react-router-dom'


const Register = () => {
  const [value, setValue] = React.useState('');
  
  return(
    <div className=' w-full h-screen flex flex-col px-5 pt-12 box-border font-sans md:w-80 md:h-full md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl '>
        <h2 className=' font-semibold text-2xl mb-1'> Register </h2>
        <p className='mb-10 font-medium text-gray-600 text-sm'>Choose an ID and enter number</p>
        <select onChange={(e) => handleChange(e) } placeholder='Choose ID type' className='w-full h-12 rounded-md border-1 border-gray-200 px-2 mb-5 bg-gray-100'>
        <option selected className='text-gray-100 text-xs font-thin'> Choose ID type</option>
          <option value="passport">Passport</option>
          <option value="nin">NIN</option>
          <option value="social">Social Security number</option>
          <option value="license">Driver's license</option>
   		  </select>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter ID No.' required />
        <Link to={'/Verify-identity'} className='w-full mt-60 md:mb-3' >
            <Button label="Proceed" handleClick={() => {}} />
        </Link>
    </div>
  )
}  

export default Register;