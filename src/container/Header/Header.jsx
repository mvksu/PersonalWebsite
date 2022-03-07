import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
import AppWrap from "../../wrapper/AppWrap"
import Icon from "./Icon";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <motion.div animate={{ rotate: [-10, 20, 0, -10] }} transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}>
              <span>👋</span>
            </motion.div>
            <div style={{ marginLeft: 20 }}>
              <p className="p=text">Hello, I am</p>
              <h1 className="head-text">Max</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">I am looking for my first job or internship in the industry  </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Icon />
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home")