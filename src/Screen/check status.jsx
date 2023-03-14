import React from "react";
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import '../App.css'

const CheckStatus = () => {
  const navigate = useNavigate();
    const [value, setValue] = React.useState('');

    const inputs =[
      {
        id: 1,
        name: "checkstatus",
        type: "text",
        placeholder: "Enter VIN/BVN/NIN",
        errorMessage: "It should be a valid identification number!",
        pattern: "[0-9]{10,23}$",
        required: true,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
       navigate('/verify-email');
    };
  
    const onChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };
  
      console.log(value);
  

    return (
      <div className='w-full h-screen flex flex-col px-5 pt-8 box-border font-sans justify-center items-center app'>
          <form onSubmit={handleSubmit}>
            <h5 className=' font-medium text-2xl mb-5'>Check your PVC status</h5>
            <p className='mb-4 font-bold text-gray-800 text-sm'>Enter VIN/BVN/NIN</p>
            {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={value[input.name]} onChange={onChange} />
          ))}
            <Button label="check status" handleClick={() => {}}  onClick={handleSubmit}/>
          </form>
          
      </div>
    )
  }
  
  export default CheckStatus;