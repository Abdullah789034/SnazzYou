import React from 'react'
import analyze from '../../assets/images/analyze.png'
import { Link } from 'react-router-dom'

const Analyzing = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <Link to='/ai'><div>
                <img src={analyze} alt="Analyzing" />
            </div>
                <div>
                    <p className='text-2xl mt-4'>Snazz is Analyzing...</p>
                </div></Link>

        </div>
    )
}

export default Analyzing
