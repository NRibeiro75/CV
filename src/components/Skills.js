import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from './Interests'

function Skills() {
  return(
  <>
    <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="1" />
    </div>

    <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="FRANCAIS" rating="5" />
        <Skill title="ANGLAIS" rating="4" />
        <Skill title="PORTUGAIS" rating="5" />
        <Skill title="ESPAGNOL" rating="3" />
    </div>
    <Interests />
  </>
  )
}

export default Skills