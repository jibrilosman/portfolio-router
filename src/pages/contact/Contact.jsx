import React from 'react'
import './Contact.css'
import { BsFacebook, BsTwitterX } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mrz4o8m', 'template_opvyf1q', form.current,'PplvkP9ksNkQ9xcYv')
      .then((result) => {
          console.log(result.text);
          toast.success('Message Sent Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
          });
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

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
            <a href="https://x.com/jibrilosman10" target='_blank' rel="noreferrer"><BsTwitterX /></a>
          </div>

        </div>
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
              <input className='form-control' type="text" name='name' placeholder="Name" required />

              <input className='form-control' type="email" name='email' placeholder="Email" required />

              <input className='form-control' type="text" name='subject' placeholder="Subject" required />

              <textarea className='form-control' name='message'  placeholder="Message" required></textarea>

              <button type="submit" className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
