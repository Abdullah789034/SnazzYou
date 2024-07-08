import React from 'react';
import line from '../assets/images/Line.png';
import img from '../assets/images/Ellipse 4.png';
import dashimg from '../assets/images/dash-img.png';
import addImg from '../assets/images/AddImg.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='p-4'>
            <div className='relative flex flex-col md:flex-row w-full p-8 border-white border-2'>
                <div className='absolute top-0 right-0 mt-2 mr-2 text-xl'>
                    <p>Since 2004</p>
                    <p>20.</p>
                </div>
                <div className='flex items-center w-full'>
                    <div className='flex-shrink-0 p-4 md:p-2'>
                        <img src={img} alt="John Smith" className='w-16 h-16 rounded-full' />
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-8 flex-grow'>
                        <p className='text-3xl'>John Smith</p>
                        <div className='flex flex-col md:flex-row gap-4 mt-4'>
                            <div className='text-xl flex items-center'>
                                <img src={line} width={4} className='mr-2' alt="Line Icon" />
                                <p>johnsmith@mail.com</p>
                            </div>
                            <div className='text-xl flex items-center'>
                                <img src={line} width={4} className='mr-2' alt="Line Icon" />
                                <p>CA, USA</p>
                            </div>
                            <div className='text-xl flex items-center'>
                                <img src={line} width={4} className='mr-2' alt="Line Icon" />
                                <p>Male</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-8'>
                <div className='border-white flex flex-col md:flex-row border-2 p-8 w-full md:w-3/4'>
                    <div className='w-full md:w-3/4'>
                        <p className='text-3xl'>Take New Suggestion</p>
                        <p className='mt-4 text-[#FFD1C1] font-[Lib] text-lg md:text-xl lg:text-2xl'>
                            sdafljklasdjflk sdfkljsdlkajfkljaslkdfjlkjsdf
                            dsklfjklasdjfkljalskdjflkjdslkfjlkajlkdjlfk
                            aklsdfjlkajdsklfjlk ;dsfklajsdlkfjlkas
                        </p>
                    </div>
                    <div className='w-full md:w-1/4 mt-4 md:mt-0 flex justify-center items-center'>
                        <Link to='/upload'>
                            <img src={addImg} alt="Add" className='max-w-full h-auto' />
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/4 flex items-center justify-center mt-8 md:mt-0'>
                    <img src={dashimg} alt="Dashboard Image" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
