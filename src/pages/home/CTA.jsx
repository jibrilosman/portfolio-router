import React from 'react'
import CV from '../../assets/Jibril _Omar_Cyber_Resume_v4.pdf'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}   className="btn" target={'_blank'} rel={'noreferrer'}>View & Download Resume</a>
        <NavLink to="/contact"  className="btn">Contact Me</NavLink>
    </div>
  )
}

export default CTA
