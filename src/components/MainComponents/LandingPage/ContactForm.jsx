import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://146.190.124.167:7878/mailto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully");
      // Reset form fields
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="flex flex-col items-center py-8 mt-10">
      <p className="text-center text-2xl mb-5">GET IN TOUCH TODAY</p>
      <div className="w-full max-w-4xl px-4">
        <form
          id="contactForm"
          className="w-full p-8 rounded "
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 md:mb-0 md:w-1/2 p-2 border border-black bg-white"
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border border-black bg-white"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-white"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-white"
              />
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Your Message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-white"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-80 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded"
                style={{ backgroundColor: "#FFF050" }}
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
