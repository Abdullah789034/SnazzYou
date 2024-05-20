import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center py-8 mt-10">
            <p className="text-center text-2xl mb-5">GET IN TOUCH TODAY</p>
            <div className="w-full max-w-4xl px-4">
                <form id="contactForm" className="w-full p-8 rounded ">
                    <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="First Name"
                                required
                                className="w-full mb-4 md:mb-0 md:w-1/2 p-2 border border-black  bg-white"
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                required
                                className="w-full md:w-1/2 p-2 border border-black  bg-white"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full p-2 border border-black  bg-white"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                className="w-full p-2 border border-black  bg-white"
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full p-2 border border-black  bg-white"
                            ></textarea>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button
                                type="submit"
                                className="w-80 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded"
                                style={{ backgroundColor: '#FFF050' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
