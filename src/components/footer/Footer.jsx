import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { SiFrontendmentor } from 'react-icons/si'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
       <div className="footer__socials">
         <a href="https://www.linkedin.com/in/jibril-omar-25bb98216/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
         <a href="https://github.com/jibrilosman" target='_blank' rel="noreferrer"><FaGithub /></a>
         <a href="https://www.frontendmentor.io/profile/jibrilosman" target='_blank' rel="noreferrer"><SiFrontendmentor /></a>
         <a href="https://twitter.com/jibrilosman10" target='_blank' rel="noreferrer"><AiFillTwitterCircle /></a>
       </div>
       <div className="copy-right">
            <p>© {currentYear} Jibril Omar.</p>
       </div>
    </footer>
  )
}

export default Footer
