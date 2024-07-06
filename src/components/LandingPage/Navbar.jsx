import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-auto  bg-stone-950'>
            <div className='p-6 flex justify-between'>
                <Link to='/'>
                    <img src={logo} width={150} className='h-auto' alt="Logo" />
                </Link>
                {/* <Link to='/login'><button className='bg-[white] px-4 py-2 rounded-full'>Login</button></Link> */}
            </div>
        </div>
    );
}

export default Navbar;  
