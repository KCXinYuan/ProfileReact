import React from 'react';

import { Education, Experience, Goals, Projects, TechSkills } from "../components/resume/index"

export default class About extends React.Component {
  render () {
    return (
      <div>
        <Goals />
        <TechSkills />
        <Projects />
        <Education />
        <Experience />
      </div>
    )
  }
}
