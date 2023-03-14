import React from 'react'
import Button from '../components/button'
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';



const Verify = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    Phone: "",
    name: ""
  });

  const inputs =[
    {
      id: 1,
      name: "phone",
      type: "text",
      placeholder: "Enter Phone No.",
      errorMessage: "It should be a valid Phone number with 11 numbers!",
      pattern: "[0-9]{11}$",
      label: "Enter the Phone No. linked to your BVN ",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Enter Maiden Name",
      errorMessage: "This field can't be empty!",
      label: "Enter Your Mother's Maiden Name",
      required: true,
    }
  ];

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate('/otp');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    console.log(values);

  
  return(
    <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
      <form onSubmit={handleSubmit}>
        <h1 className='font-semibold text-2xl mb-5 '>Verify your Identity</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
            <Button type="button" onClick={handleSubmit} label="Verify Me" handleClick={() => {}} />
        </form>
    </div>
  )
}  

export default Verify;