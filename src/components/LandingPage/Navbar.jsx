import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='h-auto drop-shadow-[0_4px_4px_rgba(255,255,255,1)] bg-stone-950'>
            <div className='p-6'>
                <img src={logo} width={150} className='h-auto' alt="Logo" />
            </div>
        </div>
    )
}

export default Navbar
