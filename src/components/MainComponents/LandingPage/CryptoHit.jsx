import React from 'react';
import bgImg from '../../../assets/images/testimonials-background.jpg';

const CryptoHit = () => {
    return (
        <div className="w-full h-[620px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="flex flex-col items-center justify-center h-full p-10 text-center text-white">
                <div className="text-4xl font-bold mt-10">It’s Official.</div>
                <div className="text-[#fff04f] text-4xl">Our Crypto & Defi Academy Is A Huge Hit!</div>
                <div className="mt-8">
                    <iframe
                        src="https://drive.google.com/file/d/19loCBcEOPRxxZil0wpFvyFnLyHnWwDFr/preview"
                        width="580"
                        height="360"
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default CryptoHit;
