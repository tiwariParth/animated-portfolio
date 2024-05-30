import React from "react";
import "./portfolio.scss";
import video from "../../assests/video.mp4";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <video src={video} autoPlay loop muted playsInline>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Portfolio;
