import React from 'react'
import Button from '../components/button'
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Auth = () => {
    const navigate = useNavigate();
  const [values, setValues] = React.useState('');

  const inputs =[
    {
      id: 1,
      name: "auth",
      type: "text",
      placeholder: "Enter VIN",
      errorMessage: "It should be a valid identification number!",
      pattern: "[0-9]{10,23}$",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

     navigate('/selectvote');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    console.log(values);

    return(
        <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-96 md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
            <form onSubmit={handleSubmit}>
                <h5 className=' font-semibold text-2xl mb-5'> Authentication </h5>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))} 
                <Button type="button" label="Login and Vote" handleClick={() => {}} onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Auth