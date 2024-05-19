import React from "react";
import bannerBg from "../../../assets/images/banner-bg.png";
import clientsCredit from "../../../assets/images/clinets-credits.jpg";
import dollarImage from "../../../assets/images/dollar-image.jpg";
import priceHome from "../../../assets/images/price-of-home.png"
import joinNow from "../../../assets/images/Join-Now-Button-1.png"


const LandingPage = () => {
  return (
    <div style={{ backgroundColor: `black` }}>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="h-[470px] w-full"
      >
        <div className="text-center">
          <span className="text-[#fff04f] text-4xl "><b>Investing In Tomorrow,TODAY</b>
          </span>
        </div>

        <div className="flex items-center justify-center h-full">
          <iframe
            allow="autoplay"
            class="spotlightr"
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
        <div className="w-full h-30">
          <img
            style={{ backgroundImage: `url(${clientsCredit})` }}
            className=" w-full bg-no-repeat bg-contain h-40"
          >
          </img>
        </div>

        {/* <div
          style={{ backgroundImage: `url(${dollarImage})` }}
          className="h-[500px] w-full"
        >
          <div className="flex">
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-[800px]">
                <img
                  decoding="async"
                  width="800"
                  height="580"
                  src={priceHome}
                  alt=""
                  srcSet={`${priceHome} 917w, ${priceHome} 300w, ${priceHome} 768w`}
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <p>
                Over the years, the journey of Bitcoin from its humble
                beginnings to its current status as a global phenomenon has
                been nothing short of captivating. From the early adopters who
                saw its potential to revolutionize finance to the mainstream
                investors flocking to capitalize on its meteoric rise,
                Bitcoin's story is one of resilience, innovation, and profound
                transformation. With each passing year, Bitcoin has not only
                proven its.staying power but has also shattered expectations,
                consistently outperforming traditional assets and cementing
                its position as a viable hedge against economic uncertainty.
                Its decentralized nature, limited supply, and growing adoption
                by institutions have propelled it into the spotlight, sparking
                a global conversation about the future of money. Whether
                viewed as a speculative asset or a hedge against inflation,
                the allure of Bitcoin continues to captivate investors
                worldwide, transcending borders and reshaping the financial
                landscape for generations to come.
              </p>
            </div>
          </div>

        </div> */}

        <div className="flex flex-col items-center w-full p-4 bg-no-repeat"
          style={{ backgroundImage: `url(${dollarImage})` }}
        >
          <div className="flex  items-center w-full max-w-screen-lg">
            <div className="flex flex-col items-center w-full mb-8">
              <img
                decoding="async"
                width="800"
                height="580"
                src={priceHome}
                alt=""
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
                    width="800"
                    height="414"
                    src={joinNow}
                    alt="Join Now"
                    srcSet={`${joinNow} 812w, ${joinNow} 300w, ${joinNow} 768w`}
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <iframe
          src="https://drive.google.com/file/d/19loCBcEOPRxxZil0wpFvyFnLyHnWwDFr/preview"
          width="640"
          height="480"
          allow="autoplay"
        /> */}
      </div>
    </div>
  );
};

export default LandingPage;
