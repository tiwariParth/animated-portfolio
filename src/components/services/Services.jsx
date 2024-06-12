import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  inital: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div className="services">
      <motion.div className="textContainer" variants={variants}>
        <motion.p>
          I foucs on helping your brand grow <br /> and move forward.
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Buissness
          </h1>
          <motion.button>WHAT WE DO?</motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Reels on Demand</h2>
          <p>
            Boost your Instagram engagement with stunning, high-quality reels!
            As a freelance video editor, I specialize in creating eye-catching
            reels that captivate your audience and elevate your brand. Let’s
            turn your content into scroll-stopping videos!
          </p>
          <button>
            <a href="https://vimeo.com/mukeshedits">Go</a>
          </button>
        </motion.div>
        <motion.div className="box">
          <h2>YouTube Shorts</h2>
          <p>
            Transform your YouTube Shorts into viral hits! I edit compelling,
            fast-paced shorts that keep viewers hooked and boost your channel’s
            growth. Elevate your content with professional editing that
            maximizes engagement and impact!
          </p>
          <button>
            <a href="https://vimeo.com/mukeshedits">Go</a>
          </button>
        </motion.div>
        <motion.div className="box">
          <h2>Thumbnails and Posts</h2>
          <p>
            Make a lasting first impression with custom YouTube and Instagram
            thumbnails and Posts! I design vibrant, clickable thumbnails that
            drive views and enhance your channel’s appeal. Let’s create
            thumbnails that stand out and attract your audience instantly!
          </p>
          <button>
            <a href="https://vimeo.com/mukeshedits">Go</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
