import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";

const abouts = [
  {
    title: "Web Development",
    description: "I am a goood web developer",
    imgUrl: images.about01,
  },
  {
    title: "UI/UX",
    description: "I am a goood web developer",
    imgUrl: images.about02,
  },
  {
    title: "Backend",
    description: "I am a goood web developer",
    imgUrl: images.about03,
  },
  {
    title: "Frontend",
    description: "I am a goood web developer",
    imgUrl: images.about04,
  },
];

export default function About() {
  return (
    <div>
      <h2 className="head-text">
        I know that 
        <span> Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px"}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: "10px"}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
