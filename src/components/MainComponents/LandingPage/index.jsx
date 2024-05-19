import React from "react";
import bannerBg from "../../../assets/images/banner-bg.png";
import clientsCredit from "../../../assets/images/clinets-credits.jpg";
import dollarImage from "../../../assets/images/dollar-image.jpg";
import priceHome from "../../../assets/images/price-of-home.png";
import joinNow from "../../../assets/images/Join-Now-Button-1.png";
import tIcon from "../../../assets/images/temple-icon.png"
import Details from "./Details";
import cryptobg from "../../../assets/images/bg.jpg"
import Defi from "./Defi";
import FinanceDetails from "./FinanceDetails";
import Blockchain from "./Blockchain";
import BookCall from "./BookCall";

const LandingPage = () => {
  return (
    <div >
      <div className="relative h-[500px] w-full" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center">
          <span className="text-[#fff04f] text-4xl pt-10">
            <b>Investing In Tomorrow, TODAY</b>
          </span>
        </div>
        <div className="relative flex items-center justify-center h-full mb-auto">
          <iframe
            allow="autoplay"
            className="spotlightr"
            allowtransparency="true"
            style={{
              width: "1px",
              minWidth: "40%",
              height: "80%",
            }}
            allowfullscreen="true"
            src="https://videos.cdn.spotlightr.com/watch/MTY2MDI4NA==?fallback=true"
            frameborder="0"
            scrolling="no"
            name="videoPlayer"
          ></iframe>
        </div>
      </div>
      <div className="w-full ">
        <img
          src={clientsCredit}
          alt="Clients Credit"
          className="w-full bg-no-repeat bg-contain h-30"
        />
      </div>

      <div className="flex flex-col items-center w-full p-4 bg-no-repeat" style={{ backgroundImage: `url(${dollarImage})` }}>
        <div className="flex items-center w-full max-w-screen-lg">
          <div className="flex flex-col items-center w-full mb-8">
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
          <div className="flex flex-col items-center w-full mb-8">
            <div className="ml-4">
              <p className="mb-4 text-lg">
                Over the years, the journey of Bitcoin from its humble beginnings to its current status as a global phenomenon has been nothing short of captivating. From the early adopters who saw its potential to revolutionize finance to the mainstream investors flocking to capitalize on its meteoric rise, Bitcoin's story is one of resilience, innovation, and profound transformation. With each passing year, Bitcoin has not only proven its staying power but has also shattered expectations, consistently outperforming traditional assets and cementing its position as a viable hedge against economic uncertainty. Its decentralized nature, limited supply, and growing adoption by institutions have propelled it into the spotlight, sparking a global conversation about the future of money. Whether viewed as a speculative asset or a hedge against inflation, the allure of Bitcoin continues to captivate investors worldwide, transcending borders and reshaping the financial landscape for generations to come.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <a href="https://londonreal.samcart.com/products/crypto--defi-academy-standard">
                <img
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="314"
                  src={joinNow}
                  alt="Join Now"
                  className="w-80 h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2B2B2B] flex flex-col items-center justify-center gap-5 py-10">
        <img src={tIcon} height={50} width={80} ></img>
        <p className="max-w-3xl text-white text-center">
          And that’s why more and more institutions and major funds are
          getting into cryptocurrencies. As regulation improves and
          marketplace maturity grows, investor confidence in this
          revolutionary new era of finance is
          <span style={{ color: "#fff04f" }}> building at a rapid pace</span>.
        </p>
      </div>
      <Details />
      <div style={{ backgroundImage: `url(${cryptobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="relative h-[113px] w-full flex items-center justify-center"
      >
        <span className="font-bold text-4xl text-center font-sans-serif" style={{ fontFamily: "Montserrat" }}>THE FUTURE IS CRYPTO AND DEFI</span>
      </div>
      <Defi />
      <FinanceDetails />
      <Blockchain />
      <div style={{ backgroundColor: '#fff04f' }}
        className="relative h-[113px] w-full flex items-center justify-center"
      >
        <span className="font-bold text-2xl text-center font-sans-serif" style={{ fontFamily: "Montserrat" }}>JOIN CAPITALS CLUB TODAY AND EMBARK ON A JOURNEY <br></br> TOWARDS FINANCIAL FREEDOM AND PROSPERITY</span>
      </div>
      <BookCall />
    </div>
  );
};

export default LandingPage;
