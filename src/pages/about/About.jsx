import React from 'react'
import './About.css'
import '../../index.css'
import Image from '../../assets/midjourney-image-1.jpg'

const About = (props) => {
  return (
    <section> 
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Image} alt="about" />
          </div>
        </div>
        <div className="about-info">
        <div className="about-place-holder">
          <h1>about</h1>
        </div>
          
          <h2>About Me</h2>
          <h5>Hello my name is Jibril Omar and I am UX/UI designer and full-stack developer</h5>
          <p>Junior Web Developer with a Diploma in Enterprise Web & Mobile Developer and a passion with coding 
            and creating websites. Organized, strong ability to communicate efficiently. 
            Ability to adapt in both self-starting and collaborative environments while staying 
            focused on achieving high-quality results under strict deadlines.</p>

            <h2>Design Tools & Other</h2>
            <div className="hero">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Adobe Xd</span>
              <span>Figma</span>
              <span>Sketch</span>
            </div>


            <h2>Development Tools</h2>

            <h2>Languages</h2>
            <div className="hero">
              <span>HTML</span>
              <span>CSS</span>
              <span>SCSS</span>
              <span>JavaScript</span>
              <span>C#</span>
              <span>JAVA</span>
              <span>SQL</span>
              <span>PHP</span>
              <span>SWIFT</span>
            </div>

            <h2>Databases</h2>
            <div className="hero">
              <span>MYSQL</span>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>

            <h2>Frameworks</h2>
            <div className="hero">
              <span>React.js</span>
              <span>JQUERY</span>
              <span>Bootstrap</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>DJANGO</span>
              <span>.NET Core</span>
              <span>ASP.NET</span>
            </div>

            <h2>Other Tools</h2>
            <div className="hero">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
            
        </div>
      </div>
    </section>  
  )
}

export default About
