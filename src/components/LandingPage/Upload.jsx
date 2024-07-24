import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import scan from "../../assets/images/Scan.png";
import scanhead from "../../assets/images/facescan.png";
import arrow from "../../assets/images/Arrow.png";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([null, null]);
  const [uploadedFileURLs, setUploadedFileURLs] = useState([null, null]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleUpload1 = () => {
    fileInputRef1.current.click();
  };

  const handleUpload2 = () => {
    fileInputRef2.current.click();
  };

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file 1:", file);
      const newFileArray = [...uploadedFiles];
      newFileArray[0] = file;
      setUploadedFiles(newFileArray);

      const newFileURLs = [...uploadedFileURLs];
      newFileURLs[0] = URL.createObjectURL(file);
      setUploadedFileURLs(newFileURLs);

      setAlertMessage("Face Image uploaded successfully!");
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file 2:", file);
      const newFileArray = [...uploadedFiles];
      newFileArray[1] = file;
      setUploadedFiles(newFileArray);

      const newFileURLs = [...uploadedFileURLs];
      newFileURLs[1] = URL.createObjectURL(file);
      setUploadedFileURLs(newFileURLs);

      setAlertMessage("Body Image uploaded successfully!");
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };

  const handleSubmit = () => {
    if (uploadedFiles.length === 2 && uploadedFiles[0] && uploadedFiles[1]) {
      navigate("/analyze", {
        state: { files: uploadedFiles },
      });
    } else {
      if (uploadedFiles.length > 2) {
        setAlertMessage("Only 2 Images are allowed");
      } else {
        setAlertMessage("Please upload both images before proceeding.");
      }
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };

  return (
    <div className="p-4 h-auto sm:p-5 md:p-5 flex flex-col items-center">
      <div className="mt-4 sm:mt-4 md:mt-4 text-center flex flex-col items-center">
        <p className="text-lg sm:text-xl md:text-3xl">
          Upload your images so Snazz can analyze them & <br /> suggest the best
          for you
        </p>
        <p className="bg-brown text-white bg-[brown] mt-2 sm:mt-3 md:mt-4 px-4 py-2 rounded">
          Your images are deleted right after AI analysis
        </p>
      </div>
      <div className="flex flex-col justify-center border-dashed border-2 border-white rounded-lg p-5 my-5">
        <div className="flex flex-col sm:flex-row items-center w-full gap-4 mt-6 ">
          <div className="flex justify-center">
            {uploadedFileURLs[0] ? (
              <img
                src={uploadedFileURLs[0]}
                alt="Uploaded Face"
                className="w-40 h-auto sm:w-40 sm:h-auto"
              />
            ) : (
              <img
                src={scanhead}
                alt="Scan"
                className="w-40 h-auto sm:w-40 sm:h-auto"
              />
            )}
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-center text-sm sm:text-base">
              1 image of your face, to determine your face structure and
              features
            </p>
            <input
              type="file"
              ref={fileInputRef1}
              style={{ display: "none" }}
              onChange={handleFileChange1}
            />
            <button
              className="bg-white px-6 text-black sm:px-8 py-3 sm:py-4 mt-4 font-bold flex items-center justify-center gap-2 w-full border border-gray-300 rounded shadow-sm hover:bg-gray-100"
              onClick={handleUpload1}
            >
              Upload{" "}
              <img
                src={arrow}
                alt="Arrow"
                width={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center w-full gap-4 mt-6">
          <div className="flex justify-center">
            {uploadedFileURLs[1] ? (
              <img
                src={uploadedFileURLs[1]}
                alt="Uploaded Body"
                className="w-40 h-auto sm:w-40 sm:h-auto"
              />
            ) : (
              <img
                src={scan}
                alt="Scan"
                className="w-40 h-auto sm:w-40 sm:h-auto"
              />
            )}
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-center text-sm sm:text-base">
              1 image of your whole body, to determine your body structure and
              features
            </p>
            <input
              type="file"
              ref={fileInputRef2}
              style={{ display: "none" }}
              onChange={handleFileChange2}
            />
            <button
              className="bg-white px-6 text-black sm:px-8 py-3 sm:py-4 mt-4 font-bold flex items-center justify-center gap-2 w-full border border-gray-300 rounded shadow-sm hover:bg-gray-100"
              onClick={handleUpload2}
            >
              Upload{" "}
              <img
                src={arrow}
                alt="Arrow"
                width={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      {alertMessage && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          {alertMessage}
        </div>
      )}

      <p className="text-sm bg-[#0A5891] p-1 mt-5">
        After uploading both images, click on Proceed.
      </p>
      <button
        className="bg-transparent text-white border-white border-2 px-6 py-3 mt-6 rounded shadow-sm hover:bg-white hover:text-black duration-150 font-semibold"
        onClick={handleSubmit}
      >
        Proceed ➔
      </button>

      <div className="text-center mt-6 md:mt-8">
        <p className="text-sm sm:text-base">
          Images should be clear, unedited, and fresh to get the best judgment
          and suggestions from AI.
        </p>
      </div>
    </div>
  );
};

export default Upload;
