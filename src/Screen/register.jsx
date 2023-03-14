import React from 'react';
import Button from '../components/button'
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    Identification: "",
  });

  const inputs =[
    {
      id: 1,
      name: "identification",
      type: "text",
      placeholder: "Enter ID No",
      errorMessage: "It should be a valid identification number!",
      pattern: "[0-9]{10,23}$",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

     navigate('/verify-identity');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    console.log(values);

  return(
    <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
       <form onSubmit={handleSubmit}>
          <h1 className='font-bold text-2xl mb-5'>Register</h1>
          <h4 className='mb-2 font-medium text-gray-700 text-base'>Choose an ID and enter number</h4>
          <select onChange={onChange} errorMessage = "Must choose ID Type!" required={true} >
            <option value={''} className='text-gray-700 text-sm'>Select ID Type</option>
            <option value= 'passport'>Passport</option>
            <option value= 'nin'>NIN</option>
            <option value= 'social'>Social Security number</option>
            <option value= 'License'>Driver's License</option>
          </select>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <Button type="button" label="Proceed" handleClick={() => {}} onClick={handleSubmit} />
       </form>
    </div>
  );
};

export default Register;
