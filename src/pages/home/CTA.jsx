import React from 'react'
import CV from '../../assets/MyC.V-1.pdf'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download  className="btn">Download C.V</a>
        <NavLink to="/contact"  className="btn">Contact Me</NavLink>
    </div>
  )
}

export default CTA
