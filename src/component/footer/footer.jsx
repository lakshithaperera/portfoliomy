import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
  return (
       <footer>
         <ul className="permalinks">
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#services">Services</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
         <div className="footer__socials">
           <a href="https://www.facebook.com/pasindu.lakshitha.14418/" target='_blank'><FaFacebookF /></a>
           <a href="https://www.instagram.com/pasindu_lakshitha_perera/"  target='_blank'><FiInstagram /></a>
           <a href="https://twitter.com/HPLakshitha1" target='_blank'><IoLogoTwitter /></a>
         </div>

         <div className="footer__copyright">
           <small>developed by H.P.Lakshitha Perera | &copy; 2022.All right reserved</small>
         </div>
       </footer>
  )
}

export default Footer