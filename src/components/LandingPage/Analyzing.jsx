import React, { useState, useEffect } from 'react';
import analyze from '../../assets/images/analyze.png';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Analyzing = () => {
    const location = useLocation(); // Use useLocation hook to get location state
    const { file } = location.state; // Destructure file from location state

    const [imgg, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [suggestion, setSuggestion] = useState(null);

    useEffect(() => {
        setImg(URL.createObjectURL(file)); // Set image URL for display

        // Function to make API request
        const fetchData = async () => {
            try {
                setLoading(true);
                const formData = new FormData();
                formData.append('image', file);

                // Make POST request to the API endpoint
                const response = await axios.post('https://snazzyou.ignorelist.com/api/v1/toy/suggest', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Handle response data
                console.log('API Response:', response.data);
                setSuggestion(response.data); // Assuming the API returns data you want to display
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        // Call fetchData function when component mounts
        fetchData();

    }, [file]); // Trigger effect when 'file' changes

    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <Link to='/ai' className='relative'>
                <img src={analyze} alt="Analyzing" className='animate-float transition-transform duration-500' />
                <p className='text-2xl mt-4 p-2 rounded-lg animate-float transition-transform duration-500'>
                    Snazz is Analyzing...
                </p>
                <img src={imgg} alt='Uploaded' width={200} className='mt-4' />
                {loading && <p>Loading...</p>}
                {suggestion && (
                    <div className='mt-4'>
                        <p>Suggestion: {suggestion}</p>
                        {/* Render additional suggestion details here */}
                    </div>
                )}
            </Link>
        </div>
    );
}

export default Analyzing;
