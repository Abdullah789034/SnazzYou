import React from 'react';
import img from '../../../assets/images/65.png';
import img2 from '../../../assets/images/21.png';
import img3 from '../../../assets/images/59.png';

const Analytics = () => {
    return (
        <div>
            <div
                style={{ backgroundColor: '#fff04f' }}
                className="relative p-10 w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 lg:gap-14"
            >
                <img src={img} className="h-20 lg:h-32 w-auto mb-2 md:mb-0" alt="Analytics 1" />
                <img src={img2} className="h-20 lg:h-32 w-auto mb-2 md:mb-0" alt="Analytics 2" />
                <img src={img3} className="h-20 lg:h-32 w-auto" alt="Analytics 3" />
            </div>
        </div>
    );
}

export default Analytics;
