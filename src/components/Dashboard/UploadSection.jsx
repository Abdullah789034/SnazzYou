import React from "react";
import dashimg from "../../assets/images/dash-img.png";
import addImg from "../../assets/images/AddImg.png";
import { Link } from "react-router-dom";

const UploadSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 p-6 bg-gradient-to-r from-[#c7174363] to-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 p-6 bg-black rounded-lg shadow-lg">
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <p className="text-4xl font-bold text-white">Get New Suggestion</p>
          <p className="text-xl text-white">Level up your style!</p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center md:items-end">
            <p className="text-xl text-gray-300 mt-2">
              Based on previous analysis
            </p>
            <Link to="/new-suggestion">
              <button className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-200 mt-2">
                Get New Suggestion
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-xl text-gray-300 mt-2">Try with new images</p>

            <Link to="/upload">
              <button className="bg-white text-black px-8 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-200 mt-2">
                Upload Images
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex items-center justify-center mt-8 md:mt-0 ">
        <img
          src={dashimg}
          alt="Dashboard Image"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default UploadSection;
