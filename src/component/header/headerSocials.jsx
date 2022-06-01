import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/h-p-lakshitha-b05905217/" target="blank"> <BsLinkedin/> </a>
        <a href="https://github.com/lakshithaperera" target="blank"> <FaGithub/></a>
        <a href="https://dribbble.com/Lakshitha33?onboarding=true" target="blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials