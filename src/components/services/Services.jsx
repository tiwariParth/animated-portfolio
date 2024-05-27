import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <motion.p>
          I foucs on helping your brand grow <br /> and move forward.
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Buissness
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum
            dolore consectetur sapiente voluptatum! Corrupti quo corporis itaque
            cumque, maxime voluptas fugiat repudiandae alias nobis. A vel
            architecto voluptates exercitationem error nemo minus sed quod,
            labore repellendus. Perferendis nam iste velit alias sed, libero
            veniam, est quo, temporibus molestias aliquid.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum
            dolore consectetur sapiente voluptatum! Corrupti quo corporis itaque
            cumque, maxime voluptas fugiat repudiandae alias nobis. A vel
            architecto voluptates exercitationem error nemo minus sed quod,
            labore repellendus. Perferendis nam iste velit alias sed, libero
            veniam, est quo, temporibus molestias aliquid.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum
            dolore consectetur sapiente voluptatum! Corrupti quo corporis itaque
            cumque, maxime voluptas fugiat repudiandae alias nobis. A vel
            architecto voluptates exercitationem error nemo minus sed quod,
            labore repellendus. Perferendis nam iste velit alias sed, libero
            veniam, est quo, temporibus molestias aliquid.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
