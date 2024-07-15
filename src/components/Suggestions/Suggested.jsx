import React from 'react';

const Suggested = ({ title, date, description }) => {
    return (
        <div className="w-full p-4 border rounded-sm shadow-lg">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{new Date(date).toLocaleDateString()}</p>
            <p>{description}</p>
        </div>
    );
};

export default Suggested;
