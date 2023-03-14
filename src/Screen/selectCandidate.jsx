import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import '../App.css'

const SelectCandidate = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
         navigate('/verification');
      };
  
      return(
        <div className=' w-full h-screen flex flex-col px-5 pt-12 box-border font-sans justify-center items-center app '>
            <form onSubmit={handleSubmit} className=" md:w-2/5">
                <h1 className='font-semibold text-2xl mb-5'>BBNaija</h1>
                <h4 className='mb-2 font-medium text-gray-900 text-sm'>Select your favorite candidate</h4>
                <div className=" grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <div className=" w-36 h-32 bg-stone-500 rounded-lg"></div>
                        <p className="text-center text-lg text-stone-700">candidate name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className=" w-36 h-32 bg-stone-500 rounded-lg"></div>
                        <p className="text-center text-lg text-stone-700">candidate name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className=" w-36 h-32 bg-stone-500 rounded-lg"></div>
                        <p className="text-center text-lg text-stone-700">candidate name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className=" w-36 h-32 bg-stone-500 rounded-lg"></div>
                        <p className="text-center text-lg text-stone-700">candidate name</p>
                    </div>
                </div>
                <Button type="button" label="Proceed" handleClick={() => {}} onClick={handleSubmit} />
            </form>

        </div>
      )
};

export default SelectCandidate;