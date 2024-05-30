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
    <motion.div
      className="services"
      variants={variants}
      initial="inital"
      ref={ref}
      animate={isInView && "animate"}
    >
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
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            facilis facere, perferendis commodi, odio perspiciatis, quidem alias
            aspernatur aut minus natus dolorem expedita ducimus error.
            Temporibus optio provident quasi nesciunt.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            facilis facere, perferendis commodi, odio perspiciatis, quidem alias
            aspernatur aut minus natus dolorem expedita ducimus error.
            Temporibus optio provident quasi nesciunt.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            facilis facere, perferendis commodi, odio perspiciatis, quidem alias
            aspernatur aut minus natus dolorem expedita ducimus error.
            Temporibus optio provident quasi nesciunt.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
