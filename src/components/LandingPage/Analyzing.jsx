import React, { useEffect } from "react";
import analyze from "../../assets/images/analyze.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../api/axios.provider";

const Analyzing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location?.state) {
    navigate("/dashboard");
  }
  const { files } = location.state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("image", files);

        const response = await axiosInstance.post(
          "/v1/users/uploads/images",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("API Response:", response.data);
        // navigate('/ai', { state: { suggestion: response.data } });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [files, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <img
        src={analyze}
        alt="Analyzing"
        className="animate-float transition-transform duration-500"
      />
      <p className="text-2xl mt-4 p-2 rounded-lg animate-float transition-transform duration-500">
        Snazz is Analyzing...
      </p>
    </div>
  );
};

export default Analyzing;
