import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === "services",
      }}
    >
      <motion.h1 style={{ y: ytext }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
          y: ybg,
        }}
      ></motion.div>
      <motion.div style={{ x: ybg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
