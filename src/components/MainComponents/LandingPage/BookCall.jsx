import React, { useState } from 'react';
import callImg from '../../../assets/images/Book-a-Call.png';

const BookCall = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div className='w-full lg:h-[550px] bg-black'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 flex items-center justify-center p-4'>
                        <div className="flex flex-col justify-center w-full lg:w-3/4 h-auto p-4 space-y-4 text-white">
                            {/* Heading */}
                            <div className="w-full">
                                <h2 className="text-4xl font-bold">What are you waiting for?</h2>
                            </div>

                            {/* Paragraphs */}
                            <div className="w-full space-y-4 text-xl">
                                <p>
                                    At Capitals Club, we're on the lookout for serious
                                    investors with ambitious financial goals, creating lasting
                                    wealth and prosperity.
                                </p>
                                <p>
                                    Join us and gain access to expert guidance, innovative
                                    strategies, and a supportive community dedicated to your
                                    financial success.
                                </p>
                                <p>
                                    With Capitals Club, you'll not only stay ahead of the
                                    curve but also pave the way for a brighter financial
                                    future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center p-4'>
                        <img
                            src={callImg}
                            alt="Book a Call"
                            className='w-2/4 lg:w-1/4 h-auto cursor-pointer'
                            onClick={togglePopup}
                        />
                    </div>
                </div>
            </div>

            {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
                        <span
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                        >
                            &times;
                        </span>
                        <h2 className="text-2xl font-bold mb-4">Book a Call</h2>
                        <div className="contact-form-root2" style={{ padding: '10px 0' }}>
                            <div className="contact-form-container">
                                <form id="contactForm" style={{ width: '100%' }}>
                                    <div className="contact-form-main">
                                        <div className="contact-form-row mb-4">
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name"
                                                required
                                                className="w-full p-2 border rounded bg-white"
                                            />
                                        </div>
                                        <div className="contact-form-row mb-4">
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Last Name"
                                                required
                                                className="w-full p-2 border rounded bg-white"
                                            />
                                        </div>
                                        <div className="contact-form-row mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                className="w-full p-2 border rounded bg-white"
                                            />
                                        </div>
                                        <div className="contact-form-row mb-4">
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                className="w-full p-2 border rounded bg-white"
                                            />
                                        </div>
                                        <div className="contact-form-row mb-4">
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Your Message"
                                                rows="6"
                                                required
                                                className="w-full p-2 border rounded bg-white"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white rounded-full py-3 text-xl font-extrabold uppercase"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BookCall;
