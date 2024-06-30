import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-auto  bg-stone-950'>
            <div className='p-6'>
                <Link to='/'>
                    <img src={logo} width={150} className='h-auto' alt="Logo" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
