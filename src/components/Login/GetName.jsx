// GetName.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow-right-white.png';

const GetName = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [name, setName] = useState(userData.name);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setUserData({ ...userData, name });
        navigate('/email');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen min-w-screen'>
            <p className='text-4xl mt-4 p-2'>What is your name?</p>
            <div className='flex items-center mt-4 w-1/2 border-b-2 border-white'>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='p-2 text-2xl text-center w-full bg-transparent text-white focus:outline-none'
                />
                <button className='ml-2 p-2' onClick={handleSubmit}>
                    <img src={arrow} alt="Submit" className='h-4' />
                </button>
            </div>
        </div>
    );
};

export default GetName;
