import React from 'react';
import bgImg from "../../../assets/images/bitcoin-image-in-mobile.jpg";

const Details = () => {
    return (
        <div className='w-full h-[620px] container' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-wrap'>
                <div className='md:w-1/2  md:ml-16 mt-10'>
                    <h2 className=" w-3/4 float-right mr-8 text-2xl font-bold text-white">
                        You won't believe what's brewing in the world of finance. Big names like{" "}
                        <span className="text-[#fff04f]">Amazon, Apple, and PayPal</span> are eyeing
                        up cryptocurrencies for their platforms. Some experts even think Bitcoin could
                        one day be as valuable as gold—imagine that.
                    </h2>

                    <div className=' text-white w-3/4 float-right mr-8 text-lg'>
                        <br></br>
                        <p>
                            Now, here's the scoop: after the wild ride of 2021, market
                            prices have cooled down. It's like the perfect storm for
                            getting into crypto
                            <strong><span style={{ color: "#fff04f" }}> now's your chance!.</span></strong>
                        </p>
                        <br></br>
                        <p>
                            But here's what sets us apart: our "done for you" approach.
                            You don't need to worry about the complexities of investing in
                            crypto. We handle everything—from education to execution.
                            We've built a reputation for reliability and expertise, backed
                            by a supportive community that's got your back every step of
                            the way. We've got the trust, the know-how, and the heart to
                            make your crypto investments a success story.
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'></div>
            </div>
        </div>
    );
};

export default Details;
