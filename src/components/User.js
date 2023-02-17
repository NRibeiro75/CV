import React from 'react'
import './User.css'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import EmailIcon from '@mui/icons-material/Email'
import EventIcon from '@mui/icons-material/Event'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'




function User() {
  return (
    <div className="user">
      <img src="./images/id.png" alt="avatar" className="user__avatar" />
      <h1 className="user__name">Nicolas Ribeiro</h1>
      {/* <p className="user__profession">Développeur Web</p> */}
      <div className="user__infos">

        <p className="user__info">
          <HomeIcon /> 73 Orchard St,New York,NY 10002
        </p>

        <p className="user__info">
          <PhoneIphoneIcon /> 
          <a href="tel:+1(929) 648-7819">+1(929) 648-7819</a>
        </p>

        <p className="user__info">
          <EmailIcon />
          <a href="mailto:nicolasribeiro75@gmail.com" target="blank">nicolasribeiro75@gmail.com</a>
          </p>

        <p className="user__info"> <EventIcon /> Date Of Birth : 10 Décembre 1988</p>
        <p className="user__info"> <LocationOnIcon /> Place Of Birth : Paris</p>
      </div>

      <div className="user__social">

        <p className="linkedin">
         <a href="https://www.linkedin.com/in/nicolas-ribeiro-11407b129/" target="blank"> <LinkedInIcon /></a>
        </p>

        <p className="github">
         <a href="https://github.com/NRibeiro75" target="blank"> <GitHubIcon /></a>
        </p>

        <p className="instagram">
         <a  href="https://www.instagram.com/ribeiro_o/?hl=fr" target="blank"> <InstagramIcon /></a>
        </p>

        <p className="facebook">
          <a href="https://www.facebook.com/nicolas.ribeiro" target="blank"> <FacebookIcon /></a>
        </p>

        <p className="twitter">
         <a href="https://twitter.com/R_I_B_E_I_R_O" target="blank"> <TwitterIcon /></a>
        </p>

      </div>

    </div>
  )
}

export default User
