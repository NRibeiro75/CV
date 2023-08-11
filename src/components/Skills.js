import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from './Interests'

function Skills() {
  return(
  <>
    <div className="skills">
        <h2 className="h2">Skills</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JavaScript" rating="3" />
        <Skill title="REACT" rating="1" />
        <Skill title="Food Service" rating="5" />
        <Skill title="Food & Beverage" rating="5" />
    </div>

    <div className="skills">
        <h2 className="h2">Languages</h2>
        <Skill title="FRENCH" rating="5" />
        <Skill title="PORTUGUESE" rating="5" />
        <Skill title="ENGLISH" rating="4" />
        <Skill title="SPANSH" rating="2" />
    </div>
    <Interests />
  </>
  )
}

export default Skills