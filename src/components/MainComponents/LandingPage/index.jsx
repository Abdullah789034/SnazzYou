import React from "react";
import bannerBg from "../../../assets/images/banner-bg.png";
const LandingPage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="h-[500px] w-full"
      >
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
