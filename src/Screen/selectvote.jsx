import React from "react";
import { Link } from 'react-router-dom';
import TextInput from '../components/textinput';

const SelectVote = () => {

    const [value, setValue] = React.useState('');

    return(
        <div className='w-full h-screen flex flex-col px-6 pt-8 md:w-80 md:h-full md:my-8 md:p-8 md:mx-auto md:bg-green-50 md:rounded-3xl'>
            <form>
                <h1 className='font-semibold text-2xl mb-5'>Select a Vote</h1>
                <h3 className='mb-2 font-medium text-gray-900 text-sm'>Click a button to vote</h3>
                <div className=" grid grid-cols-2 gap-7">
                    <Link to={'/selectCandidate'} >
                        <div className=" flex flex-col justify-center items-center rounded-lg w-40 h-20 border border-solid border-gray-600 py-1">
                            <p className="bg-green-700 w-6 h-6 rounded-full mb-2"></p>
                            <p className="text-gray-700">BBNaija</p>
                        </div>
                    </Link>  
                    <Link to={'/selectCandidate'} >
                        <div className=" flex flex-col justify-center items-center rounded-lg w-40 h-20 border border-solid border-gray-600 py-1">
                            <p className="bg-green-700 w-6 h-6 rounded-full mb-2"></p>
                            <p className="text-gray-700">BBNaija</p>
                        </div>
                    </Link>
                    <Link to={'/selectCandidate'} >
                        <div className=" flex flex-col justify-center items-center rounded-lg w-40 h-20 border border-solid border-gray-600 py-1">
                            <p className="bg-green-700 w-6 h-6 rounded-full mb-2"></p>
                            <p className="text-gray-700">BBNaija</p>
                        </div>
                    </Link>
                    <Link to={'/selectCandidate'} >
                        <div className=" flex flex-col justify-center items-center rounded-lg w-40 h-20 border border-solid border-gray-600 py-1">
                            <p className="bg-green-700 w-6 h-6 rounded-full mb-2"></p>
                            <p className="text-gray-700">BBNaija</p>
                        </div>
                    </Link>
                </div>
                <div className="bg-green-800 text-white my-7 w-full rounded-md h-12 font-xl text-center pt-3 ">
                    <p>See all</p>
                </div>
                <div>
                    <h2 className="text-gray-400 font-2xl text-center">OR</h2>
                    <p className='mt-1 text-xs text-gray-800 font-medium pb-2 md:text-lg md:pt-4'>Enter vote code</p>
                    <TextInput value={value} placeholder="Enter vote code" onChange={setValue}/>
                </div>
            </form>
        </div>
    )  
};

export default SelectVote;