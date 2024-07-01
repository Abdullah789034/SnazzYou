// GetPassword.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrow from '../../assets/images/arrow-right-white.png';

const GetPassword = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const finalData = { ...userData, password };
            console.log(finalData)
            // const response = await axios.post('your-backend-api-url', finalData);
            // console.log('Response:', response.data);
            navigate('/')
            // Handle the response accordingly (e.g., navigate to a success page)
        } catch (error) {
            console.error('Error submitting data:', error);
            // Handle the error accordingly
        }
    };

    return (
        <div>
            <div className='flex gap-8 flex-col items-center justify-center min-h-screen min-w-screen'>
                <p className='text-4xl'>Create a Password</p>

                <div className='flex gap-4 items-center justify-center'>
                    <p className='text-4xl mt-4 p-2 w-full'>Password</p>
                    <div className='flex items-center mt-4 w-full border-b-2 border-white'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-2 text-2xl text-center w-full bg-transparent text-white focus:outline-none'
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='p-2 text-white'
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <div className='flex gap-4 items-center justify-center'>
                    <p className='text-4xl mt-4 p-2 w-full'>Confirm Password</p>
                    <div className='flex items-center mt-4 w-full border-b-2 border-white'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='p-2 text-2xl text-center w-full bg-transparent text-white focus:outline-none'
                        />
                    </div>
                </div>

                <button className='mt-4 p-4' onClick={handleSubmit}>
                    <img src={arrow} alt="Submit" className='h-6' />
                </button>
            </div>
        </div>
    );
};

export default GetPassword;
