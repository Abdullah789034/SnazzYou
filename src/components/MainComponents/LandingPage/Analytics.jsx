import React from 'react'
import img from '../../../assets/images/65.png'
import img2 from '../../../assets/images/21.png'
import img3 from '../../../assets/images/59.png'

const Analytics = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#fff04f' }}
                className="relative h-[220px] w-full flex items-center justify-center gap-10"
            >
                <img src={img} className="h-40 w-auto" alt="Analytics 1" />
                <img src={img2} className="h-40 w-auto" alt="Analytics 2" />
                <img src={img3} className="h-40 w-auto" alt="Analytics 3" />
            </div>
        </div>
    )
}

export default Analytics
