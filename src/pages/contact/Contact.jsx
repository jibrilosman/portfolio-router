import React from 'react'
import './Contact.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Contact = () => {
  return (
    <section>
      <div className="contact-place-holder">
        <h1>Contact</h1>
      </div>

      <div className="container contact-container">
        <div className="contact-info">
          <h3>Email</h3>
          <p>jibrilosman404@gmail.com</p>
          <p>jibrilomar04@gmail.com</p>

          <h3>Phone</h3>
          <p>+1 647 907 1141</p>

          <h3>Address</h3>
          <p>Toronto, Canada</p>

          <div className="contact-socials">
            <a href="https://facebook.com/jibrilo1" target='_blank' rel="noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com/jibrilo1/" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
            <a href="https://twitter.com/jibrilosman10" target='_blank' rel="noreferrer"><AiFillTwitterCircle /></a>
          </div>

        </div>
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form>
              <input className='form-control' type="text" name='name' placeholder="Name" />

              <input className='form-control' type="email" name='email' placeholder="Email" />

              <input className='form-control' type="text" name='subject' placeholder="Subject" />

              <textarea className='form-control' name='message'  placeholder="Message"></textarea>

              <button type="submit" className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact