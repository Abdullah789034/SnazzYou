import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios.provider'; // Import axiosInstance

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = async () => {
        // Prepare the data to be sent
        const feedbackData = {
            rating,
            comment,
        };

        try {
            // Send POST request
            const response = await axiosInstance.post('/v1/users/feedback', feedbackData);
            if (response.data.success) {
                console.log('Feedback submitted successfully');
                // Navigate to the dashboard
                navigate('/dashboard');
            } else {
                console.error('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="w-full p-4 border rounded-sm shadow-lg">
            <h2 className="text-xl font-bold mb-2">How was the experience?</h2>
            <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049.75a.75.75 0 011.402 0l1.84 4.48 4.95.404a.75.75 0 01.422 1.299L14.8 10.562l1.273 4.788a.75.75 0 01-1.1.848l-4.173-2.896-4.173 2.896a.75.75 0 01-1.1-.848l1.273-4.788L.337 6.933a.75.75 0 01.422-1.299l4.95-.404L7.548.75z" />
                    </svg>
                ))}
            </div>
            <textarea
                className="w-full p-2 border rounded-sm mb-4"
                rows="4"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
                className="bg-transparent text-white border-white border-2 px-6 py-3 mt-6 rounded shadow-sm hover:bg-white hover:text-black duration-150 font-semibold"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default Feedback;
