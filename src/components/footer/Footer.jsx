import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
       <div className="footer__socials">
         <a href="https://facebook.com/jibrilo1" target='_blank' rel="noreferrer"><BsFacebook /></a>
         <a href="https://www.instagram.com/jibrilo1/" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
         <a href="https://twitter.com/jibrilosman10" target='_blank' rel="noreferrer"><AiFillTwitterCircle /></a>
       </div>
       <div className="copy-right">
            <p>© {currentYear} Jibril Omar.</p>
       </div>
    </footer>
  )
}

export default Footer