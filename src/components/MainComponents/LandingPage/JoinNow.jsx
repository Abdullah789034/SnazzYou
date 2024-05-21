import React from "react";
import dollarImage from "../../../assets/images/dollar-image.jpg";
import priceHome from "../../../assets/images/price-of-home.png";
import joinNow from "../../../assets/images/Join-Now-Button-1.png";

const JoinNow = ({ onButtonClick }) => {
  return (
    <div
      className="flex flex-col items-center w-full p-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${dollarImage})` }}
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg">
        <div className="flex flex-col items-center w-full mb-8 md:mb-0 md:mr-4">
          <img
            decoding="async"
            width="800"
            height="580"
            src={priceHome}
            alt="Price of Home"
            srcSet={`${priceHome} 917w, ${priceHome} 300w, ${priceHome} 768w`}
            sizes="(max-width: 800px) 100vw, 800px"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center w-full mb-8 md:mb-0">
          <p className="mb-4 text-lg text-center md:text-left p-4">
            Over the years, the journey of Bitcoin from its humble beginnings to
            its current status as a global phenomenon has been nothing short of
            captivating. From the early adopters who saw its potential to
            revolutionize finance to the mainstream investors flocking to
            capitalize on its meteoric rise, Bitcoin's story is one of
            resilience, innovation, and profound transformation. With each
            passing year, Bitcoin has not only proven its staying power but has
            also shattered expectations, consistently outperforming traditional
            assets and cementing its position as a viable hedge against economic
            uncertainty. Its decentralized nature, limited supply, and growing
            adoption by institutions have propelled it into the spotlight,
            sparking a global conversation about the future of money. Whether
            viewed as a speculative asset or a hedge against inflation, the
            allure of Bitcoin continues to captivate investors worldwide,
            transcending borders and reshaping the financial landscape for
            generations to come.
          </p>
          <div className="flex justify-center w-full">
            <a onClick={onButtonClick}>
              <img
                loading="lazy"
                decoding="async"
                width="500"
                height="314"
                src={joinNow}
                alt="Join Now"
                className="w-64 md:w-80 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
