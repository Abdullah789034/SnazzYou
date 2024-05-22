import React from "react";
import bannerBg from "../../../assets/images/banner-bg.png";

const Hero = () => {
  return (
    <div>
      <div
        className="relative h-[500px] w-full p-6"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center ">
          <span className="text-[#fff04f] text-3xl md:text-5xl mt-10  ">
            <b>Investing In Tomorrow, TODAY</b>
          </span>
        </div>
        <div className="relative flex items-start justify-center h-full mb-auto mt-3">
          <iframe
            allow="autoplay"
            className="spotlightr"
            allowtransparency="true"
            style={{
              width: "1px",
              minWidth: "45%",
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
    </div>
  );
};

export default Hero;
