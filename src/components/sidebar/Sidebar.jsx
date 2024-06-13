import React, { useState, useRef, useEffect } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import Toggle from "./togglebutton/Toggle";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 27px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      ref={sidebarRef}
    >
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
