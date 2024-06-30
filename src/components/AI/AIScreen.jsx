import React from 'react';
import human from '../../assets/images/human.png';
// import obj from '../Object';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow-right.png';

const AIScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { suggestion } = location.state
    const obj = suggestion

    const handleSuggestionClick = () => {
        navigate('/ai-suggest', { state: { obj } })
    }
    return (
        <div className='flex flex-col md:flex-row items-center justify-center p-10 h-auto w-full  md:p-20'>
            <div className='flex flex-col mt-10 md:mt-0 gap-4 justify-center items-center w-full md:w-1/2 mb-8 md:mb-0'>
                <img src={human} width={150} alt="Human" />
                <p className='text-2xl md:text-3xl'>Analyzed Features</p>
            </div>
            <div className='flex flex-col mt-10 md:mt-0 items-center w-full md:w-1/2'>
                <div className='w-full md:w-3/4'>
                    <div className='bg-[#D8E8FF] p-4 flex flex-col gap-4 md:gap-8'>
                        <div>
                            <p className='text-black font-normal text-base md:text-lg'>
                                Hair: {obj.analysis.hair.color}, {obj.analysis.hair.length}, {obj.analysis.hair.type}
                            </p>
                            <p className='text-black font-normal text-base md:text-lg'>
                                Style: {obj.analysis.current_hairstyle.type}, {obj.analysis.current_hairstyle.texture_description}, {obj.analysis.current_hairstyle.parting_description}
                            </p>
                        </div>
                        <div className='border-2 border-black flex flex-col items-center p-4 rounded-lg'>
                            <p className='text-black text-base md:text-lg'>Face</p>
                            <p className='text-black font-normal text-base md:text-lg'>
                                Shape: {obj.analysis.face_shape.type}, {obj.analysis.face_shape.facial_hair_description}, {obj.analysis.face_shape.complexion_description}
                            </p>
                            <div className='p-4 bg-[#0A5891] w-full rounded-lg'>
                                <p className='font-normal text-base md:text-lg'>
                                    Forehead Width: {obj.analysis.face_shape.measures_approximation.forehead_width}
                                </p>
                                <p className='font-normal text-base md:text-lg'>
                                    Cheekbone Width: {obj.analysis.face_shape.measures_approximation.cheekbone_width}
                                </p>
                                <p className='font-normal text-base md:text-lg'>
                                    Jawline: {obj.analysis.face_shape.measures_approximation.jawline}
                                </p>
                                <p className='font-normal text-base md:text-lg'>
                                    Face Length: {obj.analysis.face_shape.measures_approximation.face_length}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-black font-normal text-base md:text-lg'>
                                Eyes: {obj.analysis.eye_description}
                            </p>
                        </div>
                        <div>
                            <p className='text-black font-normal text-base md:text-lg'>
                                Skin: {obj.analysis.skin_description}
                            </p>
                        </div>
                    </div>
                    <button onClick={handleSuggestionClick} className='bg-[#D8E8FF] text-center p-4 mt-4 rounded-full w-full flex items-center justify-center'>
                        Go to Suggestion <img src={arrow} width={20} alt="Arrow" className='ml-2' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AIScreen;
