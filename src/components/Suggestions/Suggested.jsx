import React from 'react';

const Suggested = ({ title, date, description }) => {
    return (
        <div className="w-full p-4 border rounded-sm shadow-lg cursor-pointer h-80">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mb-4 font-light text-sm">on {new Date(date).toLocaleDateString()}</p>
            <p>{description}</p>
        </div>
    );
};

export default Suggested;
