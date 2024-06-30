import React, { useState, useEffect } from 'react';
import analyze from '../../assets/images/analyze.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Analyzing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { file } = location.state;


    useEffect(() => {

        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append('image', file);

                const response = await axios.post('https://snazzyou.ignorelist.com/api/v1/toy/suggest', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log('API Response:', response.data);
                navigate('/ai', { state: { suggestion: response.data } });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [file, navigate]);

    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <img src={analyze} alt="Analyzing" className='animate-float transition-transform duration-500' />
            <p className='text-2xl mt-4 p-2 rounded-lg animate-float transition-transform duration-500'>
                Snazz is Analyzing...
            </p>
        </div>
    );
}

export default Analyzing;
