import React from 'react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import { icons } from '../../constants/constants'
import sqlSvg from '../../icon/sql.svg'
import firebaseSvg from '../../icon/firebase.svg'
import resume from '../../pdf/resume.pdf'
import './About.scss'

export default function About() {
  return (
    <Element name="About" id="outer-about-container">
      <Fade distance="20%" up>
        <div id="about-main-container">
          <div id="about-title-container">
            <div id="about-title">About</div>
          </div>
          <div id="about-column-wrapper">
            <div id="about-column-1">
              <h1 id="about-column-1-header">Hi, my name is Brayden.</h1>
              <p>
                I&apos;m a full stack developer from Tustin, CA. Currently, I am
                a student at the{' '}
                <a
                  href="https://www.ucdavis.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of California, Davis
                </a>
                &nbsp;pursuing a degree in Computer Science.
              </p>

              <p>
                I enjoy building full stack applications using a variety of
                technologies and frameworks, and I&apos;m always looking to
                learn something new.
              </p>
            </div>

            <div id="about-column-2">
              <h1>A Few Technologies I&apos;ve Used</h1>
              <div id="about-tech-grid">
                {icons.map((icon, i) => {
                  return <i className={`fab fa-${icon}`} key={i} />
                })}
                <img id="sql" alt="sql-image" src={sqlSvg}></img>
                <img id="firebase" alt="firebase-image" src={firebaseSvg}></img>
              </div>
            </div>
          </div>
        </div>
        <div id="about-button-container">
          <Fade up delay={250} duration={500} distance="40%">
            <a
              href="mailto:braydenwerner0@gmail.com"
              aria-label={name}
              target="_blank"
              rel="noreferrer"
            >
              <button>Contact</button>
            </a>
          </Fade>
          <Fade up delay={400} duration={500} distance="40%">
            <a href={resume} aria-label={name} target="_blank" rel="noreferrer">
              <button>Resume</button>
            </a>
          </Fade>
        </div>
      </Fade>
    </Element>
  )
}
