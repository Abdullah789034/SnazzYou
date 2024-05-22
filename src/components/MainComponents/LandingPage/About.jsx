import React, { useState } from "react";
import ContactFormModal from "../../CommonComponents/contactFormModal";

const About = ({ onButtonClick }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center ">
        <div className="text-black text-lg w-3/4 space-y-4 font-medium">
          <p>
            Capitals Club is a reputable and successful investment firm
            specializing in cryptocurrency investments. Based in Cyprus, we are
            registered as a financial advisor company, offering expert guidance
            and tailored investment solutions to clients worldwide.
          </p>
          <p>
            With a deep understanding of the cryptocurrency market and extensive
            experience in financial management, our dedicated team is committed
            to helping clients achieve their financial goals through strategic
            investment strategies. We leverage innovative technologies and
            cutting-edge methodologies to navigate the dynamic landscape of
            digital assets and maximize returns for our clients.
          </p>
          <p>
            Whether you're a seasoned investor or new to the world of
            cryptocurrency, Capitals Club is here to empower you with the
            knowledge and resources needed to navigate the complexities of the
            market and seize opportunities for growth. We are dedicated to your
            financial success and look forward to partnering with you on your
            investment journey.
          </p>
          <p>
            At Capitals Club, we prioritize transparency, security, and client
            satisfaction. Our unwavering commitment to excellence drives us to
            continuously refine our investment approaches and deliver superior
            results. We operate with integrity and professionalism, building
            long-lasting relationships based on trust and mutual success.
          </p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={onButtonClick}
            className="inline-block bg-blue-600 text-white rounded-full py-3 px-20 text-xl font-extrabold uppercase"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* <ContactFormModal
                isOpen={isPopupVisible}
                onClose={togglePopup}
            /> */}
    </div>
  );
};

export default About;
