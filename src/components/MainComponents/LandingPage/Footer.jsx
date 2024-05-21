import React from "react";
import logo from "../../../assets/images/capital-club-logo (1).png";

const Footer = () => {
  return (
    <div className="bg-[#15212B] p-4 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between text-white">
        <div className="flex items-center mb-6 md:mb-0">
          <img
            decoding="async"
            src={logo}
            title="CRYPTO-LOGO"
            alt="CRYPTO-LOGO"
            loading="lazy"
            height={70}
            width={70}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-white space-y-4 md:space-y-0 md:space-x-4 text-xs">
          <a
            href="https://londonreal.tv/defi-privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="border-r border-white pr-4"
          >
            Privacy Policy
          </a>

          <a
            href="https://londonreal.tv/defi-terms"
            target="_blank"
            rel="noopener noreferrer"
            className="border-r border-white pr-4"
          >
            Terms of use
          </a>
          <a href="#">© CAPITAL CLUB 2024</a>
        </div>
        {/* <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left text-lg">
                    <p className="cursor-pointer">What we do</p>
                    <p className="cursor-pointer">Career opportunities</p>
                    <p className="cursor-pointer">Contact us</p>
                    <p className="cursor-pointer">WintonUCITS.com</p>
                </div> */}
        {/* <div className="mt-6 md:mt-0">
                    <button className="py-3 px-8 bg-white text-gray-500 rounded-3xl">
                        Investor login
                    </button>
                </div> */}
      </div>
      {/* <div className="flex flex-col md:flex-row items-center justify-center text-white mt-20 space-y-4 md:space-y-0 md:space-x-4 text-xs">
        <a href="#" className="border-r border-white pr-4">
          Scam warning
        </a>
        <a
          href="https://londonreal.tv/defi-privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-white pr-4"
        >
          Privacy Policy
        </a>
        <a href="#" className="border-r border-white pr-4">
          Disclosures
        </a>
        <a
          href="https://londonreal.tv/defi-terms"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-white pr-4"
        >
          Terms of use
        </a>
        <a href="#">© LONDON REAL 2023</a>
      </div> */}
    </div>
  );
};

export default Footer;
