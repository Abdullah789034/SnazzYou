import React from "react";
import heroImg from "../../assets/images/heroimg.png";
import blue from "../../assets/images/blue.png";
import title from "../../assets/images/title.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-items-center items-center p-4 md:p-8 h-[84vh]">
        <div className="flex flex-col w-full md:w-1/2">
          {/* <div className='bg-gray-800 p-2 text-white rounded-xl m-2 md:m-4 flex gap-3 w-full md:w-1/2'>
                        <img src={blue} alt="Blue Icon" />
                        Develop Your Fashion Sense
                    </div> */}
          <div className="m-4 md:m-8">
            <h1 className="font-bold text-5xl">
              Let AI suggest you Fashion that actually suits you
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl w-full md:w-2/3 ml-4 md:ml-10">
            AI that suggests clothing and style that perfectly match your body
            and fashion taste.
          </p>
          <div className="flex gap-4 m-4 md:m-8">
            <Link to="/register">
              <button className="p-4 rounded-lg bg-[#0A5891] text-white font-bold">
                Get a Suggestion
              </button>
            </Link>
            <Link to="/login">
              <button className="p-4 px-6 rounded-lg bg-transparent text-white font-bold border-white border-2">
                Log in
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={heroImg} alt="Hero" className="h-96" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
