import React, { useState } from "react";
import callImg from "../../../assets/images/Book-a-Call.png";
import ContactFormModal from "../../CommonComponents/contactFormModal";

const BookCall = ({ onButtonClick }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleBookCallClick = () => {
    setIsContactFormOpen(true);
  };

  return (
    <>
      <div className="w-full bg-black">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <div className="flex flex-col justify-center w-full lg:w-3/4 h-auto p-4 space-y-4 text-white">
              {/* Heading */}
              <div className="w-full">
                <h2 className="text-4xl font-bold font-['Montserrat']">
                  What are you waiting for?
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="w-full space-y-4 text-xl">
                <p>
                  At Capitals Club, we're on the lookout for serious investors
                  with ambitious financial goals, creating lasting wealth and
                  prosperity.
                </p>
                <p>
                  Join us and gain access to expert guidance, innovative
                  strategies, and a supportive community dedicated to your
                  financial success.
                </p>
                <p>
                  With Capitals Club, you'll not only stay ahead of the curve
                  but also pave the way for a brighter financial future.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center p-4">
            <img
              src={callImg}
              alt="Book a Call"
              className="w-2/4 lg:w-1/4 h-auto cursor-pointer"
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>

      {/* <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Book A Call"
      /> */}
    </>
  );
};

export default BookCall;
