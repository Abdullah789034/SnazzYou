import React from 'react'

const AIFeature = ({ title, suggestion }) => {
    return (
        <div className='bg-[#FFD1C1] p-4 m-2 flex flex-col gap-2 w-full'>
            <p className='text-xl text-black text-center capitalize'>{title.replace('_', ' ')}</p>
            <p className='text-lg text-[#0A5891] font-bold'>{suggestion.type}</p>
            <p className='text-md text-black'>{suggestion.reason}</p>
            <p className='text-md text-black'>{suggestion.details}</p>
        </div>
    )
}

export default AIFeature
