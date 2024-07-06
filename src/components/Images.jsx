import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Images = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { file1, file2 } = location.state;

    const file1Url = URL.createObjectURL(file1);
    const file2Url = URL.createObjectURL(file2);

    const handleSubmit = () => {
        navigate('/analyze', { state: { file1: file1, file2: file2 } });
    };

    return (
        <div className=''>

            <div className="p-10 flex justify-around  h-auto">
                <div className="flex flex-col">
                    <p className="text-2xl mb-4">Face Image:</p>
                    <img src={file1Url} width={200} alt="Face" className="max-w-full h-auto border border-gray-300 rounded shadow-md" />
                </div>
                <div className="flex flex-col ">
                    <p className="text-2xl mb-4">Body Image:</p>
                    <img src={file2Url} alt="Body" width={200} className="max-w-full h-auto border border-gray-300 rounded shadow-md" />
                </div>

            </div>
            <div className='flex items-center justify-center p-10'>
                <button
                    className='bg-gray-500 text-white px-6 py-3 mt-6 rounded shadow-sm hover:bg-[#0A5891]'
                    onClick={handleSubmit}
                >
                    Proceed
                </button>
            </div>

        </div>
    );
}

export default Images
