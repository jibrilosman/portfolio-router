import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Image1 from '../../assets/hero-5.jpg'
import './Header.css'

const Home = () => {
  return (
    <header>
    <div className='container header-container'>
        <div className="hero-info">
            <h3>Hi There, I'm</h3>
            <h1>Jibril Omar</h1>
            <h2>Full-Stack Developer &</h2>
            <h3 className="ce">Cybersecurity Enthusiastic</h3>
            <p>I am a full-stack developer based in Toronto, Canada.
              I have a passion for web development and love to create for web and mobile devices.</p>
              <CTA />
            <div className="header-place-holder">
                <h1>
                    O
                    <br/>
                    M
                    <br/>
                    A
                    <br/>
                    R
                </h1>
            </div>
        </div>
        <div className="hero-image">
            <img src={Image1} alt="" />
            <HeaderSocials />
        </div>
    </div>
    
</header>
  )
}

export default Home










