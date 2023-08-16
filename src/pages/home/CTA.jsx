import React from 'react'
import CV from '../../assets/JIBRIL_OMAR.pdf'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download  className="btn">Download C.V</a>
        <a href={CV}   className="btn"  rel="noreferrer" target={'_blank'}>View C.V</a>
        <NavLink to="/contact"  className="btn">Contact Me</NavLink>
    </div>
  )
}

export default CTA
