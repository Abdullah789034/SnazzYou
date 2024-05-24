import React from 'react';
import bgImg from '../../../assets/images/48.jpg';
import img1 from '../../../assets/images/49.jpg';
import signImg from '../../../assets/images/50.png';
import joinNow from "../../../assets/images/Join-Now-Button-1.png";

const WallStreet = ({ onButtonClick }) => {
    return (
        <div>
            <div
                className="w-full h-auto flex items-center justify-center flex-col p-8 gap-4"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className='w-full lg:w-[65%] p-8'><span className='text-[#FFF04F] text-4xl font-[800] font-[Montserrat]'>SO WHAT ARE YOU GOING TO DO?</span></div>
                <div className='flex gap-4 font-[Montserrat] w-full md:w-[55%]'>
                    <div className='w-full md:w-1/2 font-[Montserrat] text-white text-xl font-[600] space-y-4 '>
                        <div>One of my favourite movie scenes comes from WALL STREET when Bud Fox says</div>
                        <div className='text-3xl  font-[700] '><span className="text-[#FFF04F]">“</span>Life all comes down to a few moments, this is one of them.<span className="text-[#FFF04F]">”</span></div>
                        <div className='text-[#FFF04F] text-md'>Well this is your moment.</div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={img1} className='h-auto max-w-full ' alt="WALL STREET scene" />
                    </div>
                </div>
                <div className="text-white w-[60%] text-xl font-[400] mt-10 space-y-4">
                    <p className='font-[Roboto]'>Will you seize this opportunity and help create the financial infrastructure of the future? Will you finally create that generational wealth that you’ve struggled to build your whole life?</p>
                    <p className='font-[Roboto]'>Or will you let this moment pass like so many before it.</p>
                    <p className='font-[Roboto]'>The choice is yours. <b><a className='text-[#c36]' href="https://londonreal.samcart.com/products/crypto--defi-academy-standard">Join now</a></b> to become part of my team.</p>
                    <p className='font-[Roboto]'>See you on the inside,</p>
                    <div className=''>
                        <img src={signImg} className='h-auto max-w-100 w-[213px] my-8' alt="Brian Rose" />
                        <p className=" font-['Montserrat'] "><b className='font-bold' >Brian Rose</b><br />Founder, London Real</p>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center gap-8"
                >

                    <img
                        loading="lazy"
                        src={joinNow}
                        alt="Join Now"
                        className="w-[30%] h-auto"
                    />

                    <button
                        onClick={onButtonClick}
                        className="inline-block bg-blue-600 text-white rounded-full py-3 px-16 text-xl font-extrabold uppercase"
                    >
                        Book a Call
                    </button>

                </div>
            </div>
        </div >
    );
};

export default WallStreet;
