import React, { useState } from 'react';

const About = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center ">
                <div className="text-black text-lg w-3/4 space-y-4 font-medium">
                    <p>
                        Capitals Club is a reputable and successful investment
                        firm specializing in cryptocurrency investments. Based in
                        Cyprus, we are registered as a financial advisor company,
                        offering expert guidance and tailored investment solutions
                        to clients worldwide.
                    </p>
                    <p>
                        With a deep understanding of the cryptocurrency market and
                        extensive experience in financial management, our
                        dedicated team is committed to helping clients achieve
                        their financial goals through strategic investment
                        strategies. We leverage innovative technologies and
                        cutting-edge methodologies to navigate the dynamic
                        landscape of digital assets and maximize returns for our
                        clients.
                    </p>
                    <p>
                        Whether you're a seasoned investor or new to the world of
                        cryptocurrency, Capitals Club is here to empower you with
                        the knowledge and resources needed to navigate the
                        complexities of the market and seize opportunities for
                        growth. We are dedicated to your financial success and
                        look forward to partnering with you on your investment
                        journey.
                    </p>
                    <p>
                        At Capitals Club, we prioritize transparency, security,
                        and client satisfaction. Our unwavering commitment to
                        excellence drives us to continuously refine our investment
                        approaches and deliver superior results. We operate with
                        integrity and professionalism, building long-lasting
                        relationships based on trust and mutual success.
                    </p>
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={togglePopup}
                        className="inline-block bg-blue-600 text-white rounded-full py-3 px-20 text-xl font-extrabold uppercase"
                    >
                        Book a Call
                    </button>
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
                                            className="w-full bg-[#fff04f]  py-3 text-xl font-extrabold uppercase"
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
        </div>
    );
};

export default About;
