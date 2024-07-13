import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Images = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { files } = location.state;

  const file1Url = URL.createObjectURL(files[0]);
  const file2Url = URL.createObjectURL(files[1]);

  const handleSubmit = () => {
    navigate("/analyze", { state: { files } });
  };

  return (
    <div className="h-[80vh]">
      <div className="p-10 flex flex-col sm:flex-row justify-center gap-5 flex-wrap  h-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl mb-4 text-center font-semibold">Face Image</p>
          <img
            src={file1Url}
            width={200}
            alt="Face"
            className="max-w-full h-auto border border-dashed border-gray-300 rounded-md p-3 shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl mb-4 text-center font-semibold">Body Image</p>
          <img
            src={file2Url}
            alt="Body"
            width={200}
            className="max-w-full h-auto border border-dashed border-gray-300 rounded-md p-3 shadow-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-1">
        <button
          className="bg-transparent text-white border-white border-2 px-6 py-3 mt-6 rounded shadow-sm hover:bg-white hover:text-black duration-150 font-semibold"
          onClick={handleSubmit}
        >
          Proceed ➔
        </button>
      </div>
    </div>
  );
};

export default Images;
