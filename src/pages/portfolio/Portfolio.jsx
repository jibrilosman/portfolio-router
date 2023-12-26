import React, {  useState } from 'react'
import './Portfolio.css'
import '../../index.css'
import SportShop from '../../assets/sportshop.png'
import File from '../../assets/ProjectPrototype2.pdf'
import data from './Data'


const Portfolio = () => {
  const [numToShow, setNumToShow] = useState(5)


  function handleShowMore() {
    setNumToShow(numToShow + 3)
  }
  function handleShowLess() {
    setNumToShow(5)
  }
  return (
    <section>
       <div className="portfolio-place-holder">
          <h1>My Portfolio</h1>
        </div>
      <div className="container portfolio-container">

          <div  className='portfolio-item'>
              <div className="portfolio-item-image">
                <img src={SportShop} alt=""/>
              </div>
              <h3>E-commerce website using C# and .NET 6 MVC framework</h3>
              <div className="portfolio-item-cta">
                <a href={File} className='btn' target={'_blank'} rel="noreferrer" >Prototype</a>
                <a href="https://github.com/jibrilosman/SportShop.git" className='btn ' target={'_blank'}  rel="noreferrer">Github</a>
              </div>
          </div>
          {
            data.slice(0, numToShow).map(({id, image, title, github, demo, note}) => {
              return (
                <div key={id} className='portfolio-item data-items'>
                    <div className="portfolio-item-image">
                      <img src={image} alt=""/>
                    </div>
                    <h3>{title}</h3>
                    <smal>{note ? true : false}</smal>
                    <div className="portfolio-item-cta">
                      <a href={github} className='btn' target={'_blank'} rel="noreferrer" >Github</a>
                      <a href={demo} className='btn ' target={'_blank'}  rel="noreferrer">Live Demo</a>
                    </div>
                </div>
              )
            })
          }
          <div className="show">

          {numToShow < data.length ?
             
              ( <a href="#!" className='showMore'  onClick={handleShowMore}>Show more</a>) 
              :
              ( <a href="#!" className='showMore'  onClick={handleShowLess}>Show less</a>)       
            } 
          </div>
          
       
        
             
      </div>
       
    </section>
  )
}

export default Portfolio
