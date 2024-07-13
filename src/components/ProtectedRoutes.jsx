import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axiosInstance from "../api/axios.provider";

const ProtectedRoutes = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchAuthorization = async () => {
      try {
        const response = await axiosInstance.get("/v1/users"); // Replace with your API endpoint
        if (response.data.success) {
          setAuthorized(true); // Update authorized state
        } else {
          localStorage.removeItem("jwt-token");
          setAuthorized(false); // Update authorized state
        }
      } catch (error) {
        console.error("Error checking authorization:", error);
        localStorage.removeItem("jwt-token");
        setAuthorized(false); // Update authorized state
      } finally {
        setLoading(false); // Update loading state
      }
    };

    const token = localStorage.getItem("jwt-token");
    if (token) {
      fetchAuthorization();
    } else {
      setAuthorized(false); // Update authorized state
      setLoading(false); // Update loading state
    }
  }, []);

  // Render loading state while checking authorization
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render based on authorized state
  if (authorized) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
