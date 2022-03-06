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
            <motion.div whileInView={{ rotate: [-60, 40, 0] }}>
              <span>👋</span>
            </motion.div>
            <div style={{ marginLeft: 20 }}>
              <p className="p=text">Hello, I am</p>
              <h1 className="head-text">Max</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p=text">Web Developer</p>
            <p className="p=text">Freelancer</p>
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
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home")