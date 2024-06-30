import React from 'react';
// import obj from '../Object';
import AIFeature from './AIFeature';
import { useLocation } from 'react-router-dom';

const AISuggest = () => {
    const location = useLocation();
    const { obj } = location.state


    const suggestions = Object.entries(obj.suggestion);


    return (
        <div className='flex flex-col items-center justify-center h-auto w-full p-4 md:p-10'>
            <div className='w-full'>
                <p className='text-2xl md:text-3xl mb-4 text-center'>Suggested Style</p>
                <div className='h-auto w-full p-4 md:p-10 border-white border-4 flex flex-col md:flex-row'>
                    <div className='text-xl md:text-2xl p-4 w-full md:w-1/2 flex flex-col gap-4'>
                        <p>Hairstyle: {obj.suggestion.hairstyle.type}</p>
                        <p>Facial Hair: {obj.suggestion.facial_hair.type}</p>
                        <p>Eyewear: {obj.suggestion.eye_wear.type}</p>
                        <p>Top Wear: {obj.suggestion.top_wear.type}</p>
                    </div>
                    <div className='text-xl md:text-2xl p-4 w-full md:w-1/2 flex flex-col gap-4'>
                        <p>Bottom Wear: {obj.suggestion.bottom_wear.type}</p>
                        <p>Footwear: {obj.suggestion.footwear.type}</p>
                        <p>Jewelry: {obj.suggestion.jewelry.type}</p>
                    </div>
                </div>
            </div>

            <p className='text-2xl md:text-3xl mt-4 text-center'>Details</p>
            <div className='w-full p-4 md:p-10 flex flex-wrap justify-center gap-4 md:gap-8'>
                {suggestions.map(([title, suggestion], index) => (
                    <div className='w-full sm:w-1/2 lg:w-1/3 flex justify-center' key={index}>
                        <AIFeature title={title} suggestion={suggestion} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AISuggest;
