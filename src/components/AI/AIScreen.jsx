import React from 'react'
import human from '../../assets/images/human.png'
import obj from '../Object'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/arrow-right.png'

const AIScreen = () => {
    return (
        <div className='flex items-center justify-center h-screen w-screen p-20'>
            <div className='w-1/2 flex flex-col gap-4 justify-center items-center '>
                <img src={human} width={200} alt="Human" />
                <p className='text-3xl mb-4'>Analyzed Features</p>
            </div>
            <div className='w-1/2 flex'>
                <div className='w-3/4'>
                    <div className='bg-[#D8E8FF] p-4 flex flex-col gap-8 '>
                        <div>
                            <p className='text-black font-normal text-lg'>
                                Hair: {obj.analysis.hair.color}, {obj.analysis.hair.length}, {obj.analysis.hair.type}
                            </p>
                            <p className='text-black font-normal text-lg'>
                                Style: {obj.analysis.current_hairstyle.type}, {obj.analysis.current_hairstyle.texture_description}, {obj.analysis.current_hairstyle.parting_description}
                            </p>
                        </div>
                        <div className='border-2 border-black flex flex-col items-center p-4 rounded-lg'>
                            <p className='text-black text-lg'>Face</p>
                            <p className='text-black font-normal text-lg'>
                                Shape: {obj.analysis.face_shape.type}, {obj.analysis.face_shape.facial_hair_description}, {obj.analysis.face_shape.complexion_description}
                            </p>
                            <div className='p-4 bg-[#0A5891] w-[80%] m-4 rounded-lg'>
                                <p className='font-normal text-lg'>
                                    Forehead Width: {obj.analysis.face_shape.measures_approximation.forehead_width}
                                </p>
                                <p className='font-normal text-lg'>
                                    Cheekbone Width: {obj.analysis.face_shape.measures_approximation.cheekbone_width}
                                </p>
                                <p className='font-normal text-lg'>
                                    Jawline: {obj.analysis.face_shape.measures_approximation.jawline}
                                </p>
                                <p className='font-normal text-lg'>
                                    Face Length: {obj.analysis.face_shape.measures_approximation.face_length}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-black font-normal text-lg'>
                                Eyes: {obj.analysis.eye_description}
                            </p>
                        </div>
                        <div>
                            <p className='text-black font-normal text-lg'>
                                Skin: {obj.analysis.skin_description}
                            </p>
                        </div>
                    </div>
                    <Link to='/ai-suggest'>
                        <button className='bg-[#D8E8FF] text-center p-4 mt-8 rounded-full w-full flex items-center justify-center'>
                            Go to Suggestion <img src={arrow} width={20} alt="Arrow" className='ml-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AIScreen
