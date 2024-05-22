import React from 'react';
import bg from '../../../assets/images/career-bg-1.png'

const CapitalClubNumbers = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-[500px] bg-purple-800">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center w-full p-8 text-white">
                <div className="flex justify-center w-full mb-8">
                    <h2 className="text-4xl font-semibold text-center font-['Oswald']">CAPITAL CLUB IN NUMBERS</h2>
                </div>
                <div className="flex flex-wrap justify-center w-full gap-8 text-center">
                    <div className="w-full max-w-xs p-4 md:w-1/4">
                        <h3 className="text-4xl font-bold font-['Oswald'] "><span className="counter" data-count="1997">1997</span></h3>
                        <div className='flex items-center justify-center my-5'>
                            <span className="block h-1 w-3 bg-purple-800"></span>
                            <span className="block h-1 w-3 bg-purple-800 ml-1"></span>
                        </div>
                        <p className='tracking-2px'>FOUNDED</p>
                    </div>
                    <div className="w-full max-w-xs p-4 md:w-1/4">
                        <h3 className="text-4xl font-bold font-['Oswald']"><span className="counter" data-count="575">575</span>+</h3>
                        <div className='flex items-center justify-center my-5'>
                            <span className="block h-1 w-3 bg-purple-800"></span>
                            <span className="block h-1 w-3 bg-purple-800 ml-1"></span>
                        </div>
                        <p className='tracking-2px'>EMPLOYEES</p>
                    </div>
                    <div className="w-full max-w-xs p-4 md:w-1/4">
                        <h3 className="text-4xl font-bold font-['Oswald']"><span className="counter" data-count="5">5</span></h3>
                        <div className='flex items-center justify-center my-5'>
                            <span className="block h-1 w-3 bg-purple-800"></span>
                            <span className="block h-1 w-3 bg-purple-800 ml-1"></span>
                        </div>
                        <p className='tracking-2px'>LOCATIONS</p>
                    </div>
                    <div className="w-full max-w-xs p-4 md:w-1/4">
                        <h3 className="text-4xl font-bold font-['Oswald']">$<span className="counter" data-count="60">60</span>bn+</h3>
                        <div className='flex items-center justify-center my-5'>
                            <span className="block h-1 w-3 bg-purple-800"></span>
                            <span className="block h-1 w-3 bg-purple-800 ml-1"></span>
                        </div>
                        <p className='tracking-2px'>IN ASSETS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapitalClubNumbers;
