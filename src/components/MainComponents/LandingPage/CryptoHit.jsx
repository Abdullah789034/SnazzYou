import React from 'react'
import bgImg from '../../../assets/images/testimonials-background.jpg'

const CryptoHit = () => {
    return (
        <div className="w-full h-[620px] "
            style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col gap-4 items-center justify-center p-10'>
                <div className='text-4xl text-white font-bold mt-10 '>It’s Official.</div>
                <div className='text-[#fff04f] text-4xl'>Our Crypto & Defi Academy Is A Huge Hit!</div>
                <div>
                    <iframe
                        src="https://drive.google.com/file/d/19loCBcEOPRxxZil0wpFvyFnLyHnWwDFr/preview"
                        width="720"
                        height="360"
                        allow="autoplay"
                    />
                </div>
            </div>

        </div>
    )
}

export default CryptoHit
