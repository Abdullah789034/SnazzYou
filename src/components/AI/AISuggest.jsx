import React from 'react'
import obj from '../Object'
import AIFeature from './AIFeature'

const AISuggest = () => {
    const suggestions = Object.entries(obj.suggestion)

    return (
        <div className='flex flex-col items-center justify-center h-auto w-full'>
            <div className='p-10 w-full'>
                <p className='text-3xl mb-4 text-center'>Suggested Style</p>
                <div className='h-auto w-full p-10 border-white border-4 flex'>
                    <div className='text-2xl p-4 w-1/2 flex flex-col gap-4'>
                        <p>Hairstyle: {obj.suggestion.hairstyle.type}</p>
                        <p>Facial Hair: {obj.suggestion.facial_hair.type}</p>
                        <p>Eyewear: {obj.suggestion.eye_wear.type}</p>
                        <p>Top Wear: {obj.suggestion.top_wear.type}</p>
                    </div>
                    <div className='p-4 text-2xl w-1/2 flex flex-col gap-4'>
                        <p>Bottom Wear: {obj.suggestion.bottom_wear.type}</p>
                        <p>Footwear: {obj.suggestion.footwear.type}</p>
                        <p>Jewelry: {obj.suggestion.jewelry.type}</p>
                    </div>
                </div>
            </div>

            <p className='text-3xl mt-4 text-center'>Details</p>
            <div className='w-full p-10 flex flex-wrap justify-center gap-8'>
                {suggestions.map(([title, suggestion], index) => (
                    <div className='w-1/3 flex' key={index}>
                        <AIFeature title={title} suggestion={suggestion} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AISuggest
