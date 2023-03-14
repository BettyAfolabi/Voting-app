import React from 'react'
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Location = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

     navigate('/success');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    console.log(values);

  return(
    <div className='w-full h-100vh flex flex-col px-6 pt-8 justify-center items-center app'>    
      <form onSubmit={handleSubmit} className='md:w-1/3'>
        <p className='mb-5 font-semibold text-black text-xl  md:text-xl'>Choose Polling Unit</p>
        <select onChange={onChange} errorMessage = "Must choose Polling Unit!" required={true}>
          <option value={''}>Select polling unit</option>
          <option value= 'akure'>Akure</option>
          <option value= 'porthacourt'>Porthacourt</option>
          <option value= 'lagos'>Lagos</option>
          <option value= 'ife'>Ife</option>
        </select>

        <p className='mb-2 font-medium text-gray-600 text-sm md:text-lg'>Choose PVC collection center</p>
        <select onChange={onChange} errormessage = "Select the collection center!" required={true}>
        <option value={''}>Select collection center</option>
          <option value= 'lekki'>Lekki phase 1</option>
          <option value= 'rd 1'>Rd 1 HerTechTrailStreet</option>
          <option value= 'awo'>Awo hall</option>
          <option value= 'futa'> Futa Akindeko hostel</option>
        </select>
            <Button label="Proceed" handleClick={() => {}} onClick={handleSubmit}/>
      </form>
    </div>
  )
  
  }
export default Location;