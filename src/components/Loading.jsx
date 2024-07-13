// src/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-6 h-6 bg-white rounded-full"></div>
        <div className="w-6 h-6 bg-white rounded-full"></div>
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
