import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CandidateConfirmed = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
         navigate('/welcome');
      };
    
      return(
        <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center">
                    <img src='Images/check.png' alt='successful' className='w-60 h-60 '/>
                </div>
                <h5 className='font-semibold text-lg my-5 text-center'>Vote Successful!</h5>
                <p className='mb-2 font-medium text-gray-700 text-sm text-center'>Your vote has been successfully submitted</p>
                <Button type="button" label="Okay, got it!" handleClick={() => {}} onClick={handleSubmit} />
            </form>
        </div>
      )
}

export default CandidateConfirmed;