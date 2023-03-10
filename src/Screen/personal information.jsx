import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FormInput from '../components/formInput';
import Button from '../components/button';


const Personal = () =>  {
  const [value, setValue] =  React.useState({
    name:"",
    Birthdate: "",
    phone: "",
    State: "",
    City: "",
    LGA: "",
    Address: ""
  });


  const inputs =[
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name of user",
      pattern: "[0-9]{11}$",

    },
    {
      id: 2,
      name: "Birthdate",
      type: "date",
      placeholder: "User's Birthdate",

    },
    {
      id: 3,
      name: "name",
      type: "text",
      placeholder: "Phone No.",
      pattern: "[0-9]{11}$",
    },
    {
      id: 4,
      name: "state",
      type: "text",
      placeholder: "User state of origin",

    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "User's city",
    },
    {
      id: 6,
      name: "LGA",
      type: "text",
      placeholder: "User's LGA",
    },
    {
      id: 7,
      name: "address",
      type: "text",
      placeholder: "User's Address",
    }
  ];
  
  return (
    <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
        <h2 className=' font-semibold text-xl mb-5'> Confirm your Personal Information </h2>
        <img src="Images/picture.jpg" alt="user profile picture" className='rounded-full w-20 h-20 ml-3 self-center md:mb-3' />
        <form>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={value[input.name]} />
          ))}
          <Link to={'/location'} className='w-full mt-3 mb-2 ' >
            <Button label="Proceed" handleClick={() => {}} />
          </Link>
        </form>
    </div>
  );
}

export default Personal;