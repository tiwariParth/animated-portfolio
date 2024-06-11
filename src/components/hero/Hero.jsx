import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import video1 from "../../assests/video.mp4"
const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 20,
    transition: {
      repeat: Infinity,
      duration: 1.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MUKESH CHAUDHARY</motion.h2>
          <motion.h1>Video Editor and Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Portfolio" variants={textVariants}>
              See the Latest Works
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact Me{" "}
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Your Buissness My Creativity
      </motion.div>
      <div className="imageContainer">
        <video src={video1} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Hero;
