import React from "react";
import Button from '../components/button';
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
      Email: "",
      Password: "",
    });
  
    const inputs =[
      {
        id: 1,
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter your Email address",
        errorMessage: "It should be a valid Email!",
        required: true,
      },
      {
        id:2,
        name: "password",
        type: "text",
        label:"Password",
        placeholder: "Enter your password",
        errorMessage: "password should be 8-16 characters, and must contain at least one uppercase letter, one number and a special character",
        pattern: "^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        required: true,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
       navigate('/welcome');
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
      console.log(values);

    return(
        <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
          <form onSubmit = {handleSubmit}>
            <h1 className='font-bold text-2xl mb-5'>Log In</h1>
            {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <Button type="button" label="Log In" handleClick={() => {}}  />
            <p className='text-gray-600 font-medium text-xs mt-3'>Don't have an account? 
              <Link to={'/Register'} className='w-full text-black font-semibold' >
                 Sign Up
              </Link>
            </p>
          </form>
        </div>
    )
}

export default Home;