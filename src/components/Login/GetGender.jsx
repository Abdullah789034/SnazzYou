// GetGender.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow-right-white.png';

const GetGender = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [gender, setGender] = useState(userData.gender);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setUserData({ ...userData, gender });
        navigate('/password');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen min-w-screen'>
            <p className='text-4xl mt-4 p-2'>What is your Gender?</p>
            <div className='flex items-center mt-4'>
                {['Male', 'Female', 'Other'].map((g) => (
                    <div
                        key={g}
                        className={`p-4 m-2 cursor-pointer ${gender === g ? 'bg-white text-black' : 'bg-transparent text-white'
                            } border-2 border-white`}
                        onClick={() => setGender(g)}
                    >
                        {g}
                    </div>
                ))}
            </div>
            <button className='mt-4 p-4' onClick={handleSubmit}>
                <img src={arrow} alt="Submit" className='h-6' />
            </button>
        </div>
    );
};

export default GetGender;
