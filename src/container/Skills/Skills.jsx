import './Skills.scss'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import AppWrap from "../../wrapper/AppWrap"
import { client, urlFor } from '../../client'
import ReactTooltip from 'react-tooltip'

function Skills() {
  const [skills, setSkills] = useState([])
  const [experiance, setExperiance] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiances"]'
    const querySkills = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperiance(data)
    })
    client.fetch(querySkills).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <div>
      <h2 className="head-text">Skills & Experiance</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(skill => (
          <motion.div whileInView={{opacity: [0, 1] }} transition={{ duration: 0.5}} className="app__skills-item app__flex" key={skill.name}>
            <div className="app__flex" style={{ backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Skills)
