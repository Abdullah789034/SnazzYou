import React, { useState } from 'react';
import logo from '../../../assets/images/capital-club-logo (1).png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#111A23] sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="ml-4">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="h-20" />
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    {/* Links */}
                    <a href="#about-us" className="text-white relative group -mb-2">
                        About Us
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#our-team" className="text-white relative group -mb-2">
                        Our Team
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#reviews" className="text-white relative group -mb-2">
                        Reviews
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#faq" className="text-white relative group -mb-2">
                        FAQ
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#contact-us" className="text-white relative group -mb-2">
                        Contact Us
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#try-again" className="bg-[#fff04f] text-black px-4 py-2">Try Again</a>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    {/* Links */}
                    <a href="#about-us" className="text-white relative group">
                        About Us
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#our-team" className="text-white relative group">
                        Our Team
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#reviews" className="text-white relative group">
                        Reviews
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#faq" className="text-white relative group">
                        FAQ
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#contact-us" className="text-white relative group">
                        Contact Us
                        <span className="block h-0.5 bg-[#fff04f] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform ease-in duration-300"></span>
                    </a>
                    <a href="#try-again" className="bg-[#fff04f] text-black font-bold px-4 py-2 w-full text-center">Try Again</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
