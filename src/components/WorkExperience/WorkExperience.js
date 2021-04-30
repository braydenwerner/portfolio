import React from 'react'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'
import { workExperience } from '../../constants/constants'
import employerImage1 from '../../image/umich.jpg'
import './WorkExperience.scss'

export default function WorkExperience() {
  return (
    <Element name="Experience" id="outer-experience-container">
      <Fade distance="20%" up>
        <div id="experience-main-container">
          <div id="experience-header-container">
            <div id="experience-header">Experience</div>
          </div>
          <div id="experience-inner-container">
            {workExperience.map(({ role, employer, date, description }, i) => {
              return (
                <div id="job-container" key={i}>
                  <h1>{role}</h1>
                  <img src={employerImage1} alt="umich-image" />
                  <h2>{employer}</h2>
                  <h3>{date}</h3>

                  <div id="job-paragraph-container">
                    {description.map((description, i) => {
                      return <p key={i}>{description}</p>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>
    </Element>
  )
}
