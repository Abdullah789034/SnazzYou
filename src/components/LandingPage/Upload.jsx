import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scan from '../../assets/images/Scan.png';
import arrow from '../../assets/images/Arrow.png';
import Analyzing from './Analyzing'; // Assuming Analyzing.jsx is in the same directory

const Upload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleUpload = () => {
        fileInputRef.current.click(); // Clicking hidden file input to trigger file selection
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Uploaded file:', file);
            setUploadedFile(file); // Store the uploaded file in state
            // Navigate to /analyze with state containing the file
            navigate('/analyze', { state: { file } });
        }
    };

    return (
        <div>
            <div className='h-auto p-20 flex flex-col items-center'>
                <h2 className='text-center text-3xl'>
                    Discover Your Perfect Style with AI-Powered Fashion <br /> Analysis from Your Image
                </h2>
                <div className='mt-8 text-center flex flex-col items-center'>
                    <p className='text-2xl'>
                        Upload your images so Snazz can analyze them & <br /> suggest the best for you
                    </p>
                    <p className='bg-[brown] mt-4'>
                        Your images are private and no one other than AI see them.
                    </p>
                </div>
                <div className='flex items-center w-1/2 gap-4 mt-8'>
                    <div>
                        <img src={scan} alt="Scan" />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <p className='text-center'>
                            1 image of your whole body, to determine your body structure and features
                        </p>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <button
                            className='bg-white px-8 py-4 mt-4 font-bold flex items-center justify-center gap-2 w-full'
                            onClick={handleUpload}
                        >
                            Upload <img src={arrow} alt="Arrow" width={20} className='inline-block ml-4' />
                        </button>
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <p>Images should be clear, unedited, and fresh to be able to get the best judgment and suggestion from AI.</p>
                </div>
            </div>

        </div>
    );
};

export default Upload;
