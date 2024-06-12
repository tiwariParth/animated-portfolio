import "./navbar.scss";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        scrollTop ? "navbar--transparent" : "navbar--solid"
      }`}
    >
      <Sidebar />
      <div className="wrapper">
        <motion.span>Mukesh Choudhary</motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="Dribbble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
