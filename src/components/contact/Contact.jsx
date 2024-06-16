import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-50px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_812ulol", "template_h7yl5zj", formRef.current, {
        publicKey: "LB5N1bBf-doB_T_cM",
      })
      .then(
        () => {
          setError(false);
          setSuccess(true);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mails</h2>
          <span>johnDoe@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Mukesh resident</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91-7558499267</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          <svg
            width="400px"
            height="400px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2596 1.88032C13.3258 1.47143 13.7124 1.19406 14.1212 1.26025C14.1466 1.2651 14.228 1.28032 14.2707 1.28982C14.356 1.30882 14.475 1.33808 14.6234 1.38131C14.9202 1.46775 15.3348 1.61015 15.8324 1.83829C16.8287 2.29505 18.1545 3.09405 19.5303 4.46985C20.9061 5.84565 21.7051 7.17146 22.1619 8.16774C22.39 8.66536 22.5324 9.07996 22.6188 9.37674C22.6621 9.52515 22.6913 9.64417 22.7103 9.7295C22.7198 9.77217 22.7268 9.80643 22.7316 9.83174L22.7374 9.86294C22.8036 10.2718 22.5287 10.6743 22.1198 10.7405C21.7121 10.8065 21.328 10.5305 21.2602 10.1235C21.2581 10.1126 21.2524 10.0833 21.2462 10.0556C21.2339 10.0002 21.2125 9.91236 21.1787 9.79621C21.111 9.56388 20.9935 9.21854 20.7983 8.79287C20.4085 7.94256 19.7075 6.76837 18.4696 5.53051C17.2318 4.29265 16.0576 3.59165 15.2073 3.20182C14.7816 3.00667 14.4363 2.88913 14.2039 2.82146C14.0878 2.78763 13.9418 2.75412 13.8864 2.74178C13.4794 2.67396 13.1936 2.28804 13.2596 1.88032Z"
              fill="#1C274C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4859 5.32978C13.5997 4.93151 14.0148 4.70089 14.413 4.81468L14.207 5.53583C14.413 4.81468 14.413 4.81468 14.413 4.81468L14.4145 4.8151L14.416 4.81554L14.4194 4.81651L14.4271 4.81883L14.4469 4.82499C14.462 4.82981 14.4808 4.83609 14.5033 4.84406C14.5482 4.85999 14.6075 4.88266 14.6803 4.91386C14.826 4.9763 15.0251 5.07272 15.2696 5.21743C15.7591 5.50711 16.4272 5.98829 17.2122 6.77326C17.9972 7.55823 18.4784 8.22642 18.768 8.71589C18.9128 8.9604 19.0092 9.15946 19.0716 9.30515C19.1028 9.37795 19.1255 9.43731 19.1414 9.48222C19.1494 9.50467 19.1557 9.5235 19.1605 9.53858L19.1666 9.55837L19.169 9.56612L19.1699 9.56945L19.1704 9.57098C19.1704 9.57098 19.1708 9.57243 18.4496 9.77847L19.1708 9.57242C19.2846 9.9707 19.054 10.3858 18.6557 10.4996C18.2608 10.6124 17.8493 10.3867 17.7315 9.99462L17.7278 9.98384C17.7224 9.96881 17.7114 9.93923 17.6929 9.89602C17.6559 9.80969 17.5888 9.66846 17.4772 9.47987C17.2542 9.10312 16.8515 8.53388 16.1516 7.83392C15.4516 7.13397 14.8823 6.73126 14.5056 6.5083C14.317 6.39668 14.1758 6.32958 14.0894 6.29258C14.0462 6.27407 14.0167 6.26303 14.0016 6.2577L13.9909 6.254C13.5988 6.13613 13.373 5.72468 13.4859 5.32978Z"
              fill="#1C274C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.00745 4.40708C6.68752 2.72701 9.52266 2.85473 10.6925 4.95085L11.3415 6.11378C12.1054 7.4826 11.7799 9.20968 10.6616 10.3417C10.6467 10.3621 10.5677 10.477 10.5579 10.6778C10.5454 10.9341 10.6364 11.5269 11.5548 12.4453C12.4729 13.3635 13.0656 13.4547 13.3221 13.4422C13.5231 13.4325 13.6381 13.3535 13.6585 13.3386C14.7905 12.2203 16.5176 11.8947 17.8864 12.6587L19.0493 13.3077C21.1454 14.4775 21.2731 17.3126 19.5931 18.9927C18.6944 19.8914 17.4995 20.6899 16.0953 20.7431C14.0144 20.822 10.5591 20.2846 7.13735 16.8628C3.71556 13.441 3.17818 9.98579 3.25706 7.90486C3.3103 6.50066 4.10879 5.30574 5.00745 4.40708ZM9.38265 5.68185C8.78363 4.60851 7.17394 4.36191 6.06811 5.46774C5.29276 6.24309 4.7887 7.0989 4.75599 7.96168C4.6902 9.69702 5.11864 12.7228 8.19801 15.8021C11.2774 18.8815 14.3031 19.31 16.0385 19.2442C16.9013 19.2115 17.7571 18.7074 18.5324 17.932C19.6382 16.8262 19.3916 15.2165 18.3183 14.6175L17.1554 13.9685C16.432 13.5648 15.4158 13.7025 14.7025 14.4158C14.6325 14.4858 14.1864 14.902 13.395 14.9405C12.5847 14.9799 11.604 14.6158 10.4942 13.506C9.38395 12.3958 9.02003 11.4148 9.0597 10.6045C9.09846 9.81294 9.51468 9.36733 9.58432 9.29768C10.2976 8.58436 10.4354 7.56819 10.0317 6.84478L9.38265 5.68185Z"
              fill="#1C274C"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.9 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
