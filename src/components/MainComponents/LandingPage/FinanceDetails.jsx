import React from "react";
import joinNow from "../../../assets/images/Join-Now-Button-1.png";

const FinanceDetails = ({ onButtonClick }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full p-12 text-white"
      style={{ backgroundColor: "#120B01" }}
    >
      {/* Left empty side */}
      <div className="w-full md:w-1/2"></div>

      {/* Right side with content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:mr-8 space-y-8 ">
        <div className="w-full max-w-screen-lg text-center md:text-right">
          <h2 className="text-2xl font-bold font-['Montserrat']">
            Imagine this:{" "}
            <span className="text-[#fff04f]">Centralised Finance sector</span>{" "}
            is currently pulling in over{" "}
            <span className="text-[#fff04f]">$9.1 Trillion annually</span> every
            year from the global economy. That's more than what the utilities,
            communication services, and real estate sectors combined are making.
          </h2>
        </div>
        <div className="w-full max-w-screen-lg text-center md:text-right">
          <p className="text-xl">
            But here's the kicker: that staggering amount of money is ripe for
            disruption and redistribution. We're talking about at least{" "}
            <strong>
              <span className="text-[#fff04f]">$9 Trillion</span>
            </strong>{" "}
            just waiting to be unlocked and put back into the hands of the
            people.
          </p>
        </div>
        <div className="w-full max-w-screen-lg text-center md:text-right">
          <a onClick={onButtonClick}>
            <img
              loading="lazy"
              decoding="async"
              width="800"
              height="414"
              src={joinNow}
              alt="Join Now"
              srcSet={`${joinNow} 812w, ${joinNow} 300w, ${joinNow} 768w`}
              sizes="(max-width: 800px) 100vw, 800px"
              className="w-2/3 h-auto mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinanceDetails;
