import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scan from '../../assets/images/Scan.png';
import arrow from '../../assets/images/Arrow.png';

const Upload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Uploaded file:', file);
            setUploadedFile(file);
            navigate('/analyze', { state: { file } });
        }
    };

    return (
        <div className='p-4 h-screen md:h-auto  sm:p-10 md:p-20 flex flex-col items-center'>
            <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>
                Discover Your Perfect Style with AI-Powered Fashion <br /> Analysis from Your Image
            </h2>
            <div className='mt-4 sm:mt-6 md:mt-8 text-center flex flex-col items-center'>
                <p className='text-lg sm:text-xl md:text-2xl'>
                    Upload your images so Snazz can analyze them & <br /> suggest the best for you
                </p>
                <p className='bg-brown text-white bg-[brown] mt-2 sm:mt-3 md:mt-4 px-4 py-2 rounded'>
                    Your images are private and no one other than AI see them.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row items-center w-full sm:w-3/4 md:w-1/2 gap-4 mt-6 md:mt-8'>
                <div className='flex justify-center'>
                    <img src={scan} alt="Scan" className='w-40 h-40 sm:w-40 sm:h-40' />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <p className='text-center text-sm sm:text-base'>
                        1 image of your whole body, to determine your body structure and features
                    </p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button
                        className='bg-white px-6 sm:px-8 py-3 sm:py-4 mt-4 font-bold flex items-center justify-center gap-2 w-full border border-gray-300 rounded shadow-sm hover:bg-gray-100'
                        onClick={handleUpload}
                    >
                        Upload <img src={arrow} alt="Arrow" width={20} className='inline-block ml-2' />
                    </button>
                </div>
            </div>
            <div className='text-center mt-6 md:mt-8'>
                <p className='text-sm sm:text-base'>
                    Images should be clear, unedited, and fresh to get the best judgment and suggestions from AI.
                </p>
            </div>
        </div>
    );
};

export default Upload;
