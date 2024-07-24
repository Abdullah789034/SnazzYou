import React, { useEffect, useState } from "react";
import line from "../../assets/images/Line.png";
import img from "../../assets/images/avatar.png";
import axiosInstance from "../../api/axios.provider"; // Import axiosInstance
import PrevSuggestion from "../Suggestions/PrevSuggestion";
import UploadSection from "./UploadSection";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("jwt-token");
      if (!token) {
        console.error("No token found");
        setError("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.get("/v1/users/");

        if (response.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        setUser(response.data.data); // Accessing the 'data' field from the response
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className="p-4">
      <div className="relative flex flex-col md:flex-row rounded-sm w-full p-8 border-white border-2">
        <div className="absolute top-0 right-0 mt-2 mr-2 text-xl ">
          <p>Since {new Date(user.dateOfBirth).getFullYear()}</p>
          <p>
            {new Date().getFullYear() -
              new Date(user.dateOfBirth).getFullYear()}
            .
          </p>
        </div>
        <div className="flex items-center w-full">
          <div className="flex-shrink-0 p-4 mr-4 md:mr-0 md:p-2">
            <img src={img} alt={user.name} className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-8 md:mt-0 md:ml-8 w-1/2 lg:w-full flex-grow">
            <p className="text-3xl">{user.name.toUpperCase()}</p>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
              <div className="text-xl flex items-center">
                <img src={line} width={4} className="mr-2" alt="Line Icon" />
                <p>{user.email}</p>
              </div>
              <div className="text-xl flex items-center">
                <img src={line} width={4} className="mr-2" alt="Line Icon" />
                <p>
                  {user.region.city}, {user.region.country}
                </p>
              </div>
              <div className="text-xl flex items-center">
                <img src={line} width={4} className="mr-2" alt="Line Icon" />
                <p>{user.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UploadSection />
      <div className="mt-10">
        <PrevSuggestion />
      </div>
    </div>
  );
};

export default Dashboard;
