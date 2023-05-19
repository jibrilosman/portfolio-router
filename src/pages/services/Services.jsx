import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faLayerGroup, faMobileButton, faPenRuler } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

const Services = () => {
  return (
    <section>

        <div className="services-place-holder">
          <h1>SERVICES</h1>
        </div>
      <div className='container services-container'>
          <div className="service-box">
              <div className="service-icon hexagon">
                <FontAwesomeIcon icon={faLaptop} bounce />
              </div>
              <div className="service-text">
                <h3>Web Development</h3>
                <p>Designing, Building, or Maintaining Websites and software applications using the latest technologies.</p>
              </div>
          </div> 

          <div className="service-box">
            <div className="service-icon hexagon">
               <FontAwesomeIcon icon={faMobileButton} bounce />
            </div>
            <div className="service-text">
              <h3>Responsiveness</h3>
              <p>Designing, Building, or Maintaining Websites and software applications using the latest technologies.</p>
            </div>
          </div>
          
          <div className="service-box">
            <div className="service-icon hexagon">
              <FontAwesomeIcon icon={faLayerGroup} bounce />
            </div>
            <div className="service-text">
              <h3>Different Layout</h3>
              <p>Ecommerce websites</p>
              <p>Personal websites</p>
              <p>Portfolio websites</p>
              <p>Small business websites</p>
              <p>Blog websites</p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon hexagon">
              <FontAwesomeIcon icon={faPenRuler} bounce />
            </div>
            <div className="service-text">
              <h3>UI/UX Design</h3>
              <p>create the user interface for an app, website</p>
            </div>
          </div>

      </div>
    </section>
   
  )
}

export default Services