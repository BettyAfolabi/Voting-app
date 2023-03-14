import React from 'react';
import Button from '../components/button';
import FormInput from '../components/formInput';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Verification = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        OTP: "",
      });
    
      const inputs =[
        {
          id: 1,
          name: "OTP",
          type: "text",
          placeholder: "Enter OTP",
          errorMessage: "Cannot be blank",
          label:"Enter OTP sent to your number",
          required: true,
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
         navigate('/confirmCandidate');
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
        console.log(values);
    
        return(
            <div className=' w-full h-screen flex flex-col px-5 pt-12 box-border font-sans justify-center items-center app'>
                <form onSubmit={handleSubmit}>
                    <h1 className='font-bold text-2xl mb-5'>Verification</h1>
                    {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    <Button type="button" label="Submit" handleClick={() => {}} onClick={handleSubmit} />
                </form>
            </div>
        )
};

export default Verification;