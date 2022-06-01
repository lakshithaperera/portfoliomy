import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className="container services__container">
          <article className="service">
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className='service__list'>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                 </li>
               
                 
              </ul>
          </article>

          <article className="service">
              <div className="service__head">
                <h3>frond End  Development</h3>
              </div>
              <ul className='service__list'>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>HTML & CSS Responsive Web Development.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>AMP app development - optimized for mobile web browsing and intended to help webpages load faster.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Single page applications development services with powerful front end.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Using JavaScript-based frameworks. </p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>convert the file(psd,adobe xd,figma,pdf) to a responsive and pixel-perfect website using HTML5, CSS3, Bootstrap and javascript.</p>
                 </li>
               
                 
              </ul>
          </article>

          
     </div>
   </section>
  )
}

export default Services
