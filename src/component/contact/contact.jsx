import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lbvnyio', 'template_cnrjfhf', form.current, 'YH2k4x0L2crDDKloN')
    
    e.target.reset()
      
  };
  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article  className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>eric.schowaltere@gmail.com</h5>
          <a href="mailto:eric.schowaltere@gmail.com" target='_blank'>send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp  className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+94 771966912</h5>
          <a href="https://wa.me/+94771966912" target='_blank'>send a message</a>
        </article>

        <article className="contact__option">
          <SiFiverr  className='contact__option-icon fvr' />
          <h4>fiverr</h4>
          <h5>eric_schowalter</h5>
          <a href="https://www.fiverr.com/eric_schowalter?public_mode=true" target='_blank'>Contact Me on fiverr</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name'  required />
        <input type="email" name='email' placeholder='Your Email ' required />
        <textarea name="massage"  rows="10" placeholder='Your Massage' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
   