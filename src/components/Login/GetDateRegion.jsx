// GetDateRegion.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow-right-white.png';

const GetDateRegion = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [birthDate, setBirthDate] = useState(userData.birthDate);
    const [region, setRegion] = useState(userData.region);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setUserData({ ...userData, birthDate, region });
        navigate('/gender');
    };

    return (
        <div className='flex gap-8 flex-col items-center justify-center min-h-screen min-w-screen'>
            <div className='flex gap-4 items-center justify-center'>
                <p className='text-4xl mt-4 p-2'>When were you born?</p>
                <div className='flex items-center mt-4 w-/4 border-b-2 border-white'>
                    <input
                        type='date'
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className='p-2 text-2xl text-center w-full bg-transparent text-white focus:outline-none'
                    />
                </div>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <p className='text-4xl mt-4 p-2'>What is your region?</p>
                <div className='flex items-center mt-4 w-1/4 border-b-2 border-white'>
                    <input
                        type='text'
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className='p-2 text-2xl text-center w-full bg-transparent text-white focus:outline-none'
                    />
                </div>
            </div>
            <button className='mt-4 p-4' onClick={handleSubmit}>
                <img src={arrow} alt="Submit" className='h-6' />
            </button>
        </div>
    );
};

export default GetDateRegion;
