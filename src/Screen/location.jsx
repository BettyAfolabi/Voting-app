import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'


const Location = () => {
  const [value, setValue] = React.useState('');
  
  return(
    <div className='w-full h-screen flex flex-col px-6 pt-12'>
        <p className='mb-2 font-medium text-gray-600 text-sm'>Choose Polling Unit</p>
        <select onChange={(e) => handleChange(e) } className='w-full h-12 rounded-md border-1 border-gray-200 px-2 mb-5 bg-gray-100'>
          <option selected> Select Location</option>
          <option value="ife">Ife</option>
          <option value="porthacourt">Porthacourt</option>
          <option value="lagos">Lagos</option>
          <option value="akure">Akure</option>
   		</select>
        <p className='mb-2 font-medium text-gray-600 text-sm'>Choose PVC collection center</p>
        <select onChange={(e) => handleChange(e) } className='w-full h-12 rounded-md border-1 border-gray-200 px-2 mb-5 bg-gray-100'>
          <option selected> Select Location</option>
          <option value="awo hall">Awo Hall</option>
          <option value="rd 1">Rd 1, HerTechTrailStreet</option>
          <option value="lekki">Lekki phase one</option>
          <option value="futa">Futa Akindeko Hall</option>
   		</select>
        <Link to={'/success'} className='w-full mt-56' >
            <Button label="Proceed" handleClick={() => {}} />
        </Link>
    </div>
  )
}  

export default Location;