import React from "react";
import bgImg from '../../../assets/images/18.jpg'
import CrossCircledIcon from "../../../assets/icons/cross-circled-Icon";
import RedCrossIcon from "../../../assets/icons/red-cross-icon";

const CryptoAcademyInfo = () => {
    return (
        <div
            className="relative h-auto w-full p-6"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
        >
            <div className="w-full flex justify-center -mt-20 pt-20 items-center flex-col gap-8 ">
                <div className="w-full md:w-[60%] bg-gradient-to-b from-[#333333] to-[#12110D] p-6 ">
                    <h2 className="text-3xl font-extrabold text-white mb-4 text-center underline font-['Montserrat'] ">To be very clear:</h2>
                    <span>
                        <ul className="space-y-2 font-['Roboto'] text-lg">
                            <li className="flex items-center gap-4 text-white">
                                <RedCrossIcon className="mr-2" />
                                The Crypto &amp; DeFi Academy is NOT for crypto day-traders
                            </li>
                            <li className="flex items-center gap-4 text-white">
                                <RedCrossIcon className="mr-2" />
                                The Crypto &amp; DeFi Academy is NOT for people looking to get rich quick
                            </li>
                            <li className="flex items-center gap-4 text-white">
                                <RedCrossIcon className="mr-2" />
                                The Crypto &amp; DeFi Academy is NOT for memecoins and forum trolls
                            </li>
                            <li className="flex items-center gap-4 text-white">
                                <RedCrossIcon className="mr-2" />
                                The Crypto &amp; DeFi Academy is NOT for blockchain fanboys &amp; crypto academics
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="flex justify-center items-center flex-col gap-8">
                    <p className="text-red-600 font-montserrat text-base font-medium italic underline">*This is not a get-rich scheme and I am not promising overnight gains.*</p>
                    <div className="text-center text-white text-xl font-[400] font-['Roboto'] w-full md:w-[70%] flex flex-col gap-4">
                        <span>We’re looking for people who want to <b>invest in themselves</b> long-term in this incredible technology and movement.</span>
                        <span>My team will be building and investing in the digital financial infrastructure of the future known as <b>DeFi.</b></span>
                        <span>Sure there will be<b> incredible opportunities</b>, but also great risks.</span>
                        <span><strong>Only</strong> those who are serious about making transformative change and creating <b>financial freedom and generational wealth</b> should join.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoAcademyInfo;
