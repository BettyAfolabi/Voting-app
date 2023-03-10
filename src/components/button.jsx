import React from 'react'


const Button = ({handleClick, label}) => {
  

  return (
    <button onClick={handleClick} className='w-full h-9 rounded-md bg-green-800 text-white  inset-y-0  mt-4 p-0 '>
        {label}
    </button>
  )
}

export default Button