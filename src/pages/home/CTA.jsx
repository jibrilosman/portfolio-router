import React from 'react'
import CV from '../../assets/MyC.V-1.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download  className="btn">Download C.V</a>
        <a href="#contact"  className="btn">Contact Me</a>
    </div>
  )
}

export default CTA