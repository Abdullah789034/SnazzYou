import React from 'react'
import scan from '../assets/images/Scan.png'
import arrow from '../assets/images/Arrow.png'

const Upload = () => {
    return (
        <div>
            <div className='h-auto p-20 flex flex-col items-center justify-items-center'>
                <h2 className=' text-center text-3xl'>
                    Discover Your Perfect Style with AI-Powered Fashion <br /> Analysis from Your Image
                </h2>
                <div className='mt-8 text-center flex flex-col items-center  justify-items-center '>
                    <p className='text-2xl '>
                        Upload your images So Snazz can analyze them & <br /> suggest the best for you
                    </p>
                    <p className='bg-[brown]  mt-4 '>Your images are private and no one other than AI see them.   </p>
                </div>
                <div className='flex items-center w-1/2 justify-items-center gap-4'>
                    <div>
                        <img src={scan}></img>
                    </div>
                    <div>
                        <p className='text-center'> 1 Images of your whole body, to determine your body structure and features</p>
                        <button className='bg-[white] px-8 py-4 mt-4 font-bold w-full'> Upload </button>
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <p>Images should be clear, unedited and fresh to be able to get best of judgment and suggestion from AI</p>
                </div>

            </div>
        </div>
    )
}

export default Upload
