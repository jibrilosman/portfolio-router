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
          <h5>
            Hello my name is <strong>Jibril Omar</strong> and I am UX/UI
            designer and full-stack developer
          </h5>
          <p>
            Passionate and dedicated Web Developer with a Diploma in Enterprise
            Web & Mobile Development, I bring a diverse skill set in programming
            languages and frameworks. My recent role as a Co-op Full-stack
            Developer at Brand M3dia allowed me to play a pivotal role in an
            innovative pay kiosk project. I focused on creating a user-friendly
            interface with React, delving into the backend with Node.js and
            Express, gaining valuable insights into full-stack development, API
            integration, and effective collaboration using GitHub. As a Junior
            Full-stack Developer at Alieniz, I honed my skills in web
            development technologies. I crafted responsive interfaces using
            HTML, CSS, SCSS, bootstrap, and React JS, contributing to
            server-side logic and APIs with PHP Laravel for seamless data flow.
            Committed to community service, I volunteered at the Somali Refugee
            Centre in Malaysia, emphasizing empathy and the use of technology to
            empower those in need. My educational background includes accounting
            studies at Sana’a University, a Diploma in Enterprise Web & Mobile
            Developer program at triOS College, and Coursera certifications in
            mobile development, advanced web technologies, and various
            programming languages. Eager to contribute technical expertise,
            problem-solving abilities, and a passion for web development to a
            dynamic team, I am confident that my skills align with the Web
            Developer position. Excited about the opportunity to learn and grow
            within a forward-thinking company.
          </p>

          <h2>Development Tools</h2>
               <div className="hero">
                  <span>VS Code</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Agile Scrum</span>
                  <span>JIRA</span>
                  <span>Chrome Developer Tools</span>
                  <span>Postman</span>
                  <span>Docker</span>
                  <span> Production deployment</span>
                  <span>JIRA</span>
                </div>
          
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
          
             <h2>Design Tools & Other</h2>
            <div className="hero">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Adobe Xd</span>
              <span>Figma</span>
              <span>Sketch</span>
            </div>
            
            
        </div>
      </div>
    </section>  
  )
}

export default About
