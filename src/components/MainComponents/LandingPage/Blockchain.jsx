import React from 'react';
import bgImg from '../../../assets/images/blockchain-bg.png';
import noMiddlemenImg from '../../../assets/images/11.png';
import noBankersImg from '../../../assets/images/12.png';
import noBanksImg from '../../../assets/images/13.png';

const Blockchain = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div
                className="w-full h-auto min-h-[620px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="flex flex-col items-center w-full mt-10 p-4 md:p-8">
                    <div className="flex flex-wrap justify-center w-full gap-8 max-w-screen-lg">
                        {/* No Middlemen */}
                        <div className="relative flex flex-col items-center w-full max-w-xs p-4 space-y-4 text-center bg-gradient-to-b from-[#12100B] to-[#16171E] md:w-1/3">
                            <img
                                src={noMiddlemenImg}
                                alt="No Middlemen"
                                className="w-24 h-auto -mt-14"
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white">No Middlemen</h3>
                            <p className="text-sm md:text-base text-white">No more shady middlemen</p>
                        </div>

                        {/* No Bankers */}
                        <div className="relative flex flex-col items-center w-full max-w-xs p-4 space-y-4 text-center bg-gradient-to-b from-[#12100B] to-[#16171E] md:w-1/3">
                            <img
                                src={noBankersImg}
                                alt="No Bankers"
                                className="w-24 h-auto -mt-14"
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white">No Bankers</h3>
                            <p className="text-sm md:text-base text-white">
                                No more bankers ripping out huge spreads because of a lack of transparency
                            </p>
                        </div>

                        {/* No Banks */}
                        <div className="relative flex flex-col items-center w-full max-w-xs p-4 space-y-4 text-center bg-gradient-to-b from-[#12100B] to-[#16171E] md:w-1/3">
                            <img
                                src={noBanksImg}
                                alt="No Banks"
                                className="w-24 h-auto -mt-14"
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white">No Banks</h3>
                            <p className="text-sm md:text-base text-white">
                                No more banks keeping their customers in the dark when it comes to dangerous risk exposure
                            </p>
                        </div>
                    </div>

                    {/* Revolution Section */}
                    <div className="flex flex-col items-center w-full mt-8 p-4 md:p-8 space-y-4 max-w-screen-lg">
                        <h2 className="text-lg md:text-2xl font-bold text-center text-white">
                            Get ready for a revolution. <span className="text-[#fff04f]">DeFi and the Blockchain</span> are about to shake up the way we think about and interact with our money.
                        </h2>
                        <p className="text-sm md:text-base text-center text-white">
                            With our expertise and resources, we'll empower you to navigate the complexities of this new era of finance, turning understanding into action and potential into profit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blockchain;
