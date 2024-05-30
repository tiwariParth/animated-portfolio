import React, { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";
const Cursor = () => {
  const [postion, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      animate={{ x: postion.x, y: postion.y }}
    ></motion.div>
  );
};

export default Cursor;
