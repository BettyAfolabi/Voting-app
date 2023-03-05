import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Auth = () => {
    const [value, setValue] = React.useState('');
    return(
        <div className='w-full h-screen flex flex-col px-6 pt-12 md:w-80 md:h-96 md:my-3 md:mx-auto md:bg-green-50 md:rounded-3xl'>
            <h5 className=' font-semibold text-2xl mb-5'> Authentication </h5>
            <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter VIN' />
            <Link to={'/'} className='w-full ' >
                <Button label="Login and Vote" handleClick={() => {}} />
            </Link>
        </div>
    )
}

export default Auth