import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import video1 from "../../assests/video.mp4";
import video2 from "../../assests/video2.mp4";
import video3 from "../../assests/video3.mp4";
import video4 from "../../assests/video4.mp4";
import video5 from "../../assests/video5.mp4";
import video6 from "../../assests/video6.mp4";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Instagram Reels",
    videos: [video1, video2, video3],
  },
  {
    id: 2,
    title: "YouTube Shorts",
    videos: [video4, video5, video6],
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  const videoRefs = item.videos.map(() => useRef());
  const videoInView = videoRefs.map((ref) => useInView(ref, { amount: 0.5 }));

  const videoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
  };

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper" style={{ y }}>
          <div>
            <h2>{item.title}</h2>
            <button>
              <a href="">View More</a>
            </button>
          </div>
          {item.videos.map((video, index) => (
            <motion.div
              className="videoContainer"
              key={index}
              custom={index}
              initial="hidden"
              animate={videoInView[index] ? "visible" : "hidden"}
              variants={videoVariants}
              ref={videoRefs[index]}
            >
              <video src={video} autoPlay loop muted controls></video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
