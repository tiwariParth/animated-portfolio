import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ReactPlayer from "react-player";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Instagram Reels",
    videos: [
      "https://www.youtube.com/shorts/mppG4fkMeKI?feature=share",
      "https://www.youtube.com/shorts/XvKPrXvwIHY?feature=share",
      "https://www.youtube.com/shorts/--eVrzf2zQo?feature=share",
    ],
  },
  {
    id: 2,
    title: "YouTube Shorts",
    videos: [
      "https://www.youtube.com/shorts/sJiTMkwTwio?feature=share",
      "https://www.youtube.com/shorts/vMLjvCRixjo?feature=share",
      "https://www.youtube.com/shorts/U8d496w5zCM?feature=share",
    ],
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

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="portfolio" ref={ref}>
      <div className="heading">
        <h1>Featured Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
      {isMobile
        ? items.map((item) => <VideoCarousel item={item} key={item.id} />)
        : items.map((item) => <Single item={item} key={item.id} />)}
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
              <a
                href="https://vimeo.com/mukeshedits"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
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
              <ReactPlayer
                url={video}
                playing
                loop
                muted
                controls
                width="100%"
                height="100%"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCarousel = ({ item }) => {
  return (
    <div className="carousel-wrapper">
      <h2>{item.title}</h2>
      <Carousel>
        {item.videos.map((video, index) => (
          <Carousel.Item key={index}>
            <ReactPlayer
              className="video"
              url={video}
              playing={true}
              loop={true}
              muted={true}
              controls
              width="100%"
              height="100%"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <button className="view-more">
        <a
          href="https://vimeo.com/mukeshedits"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </button>
    </div>
  );
};

export default Portfolio;
