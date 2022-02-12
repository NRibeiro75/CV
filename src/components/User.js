import React from 'react'
import './User.css'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import EmailIcon from '@mui/icons-material/Email'
import EventIcon from '@mui/icons-material/Event'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function User() {
  return (
    <div className="user">
      <img src="./images/moi.jpg" alt="avatar" className="user__avatar" />
      <h1 className="user__name">Nicolas Ribeiro</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">

        <p className="user__info">
          <HomeIcon /> 12 Rue De Clichy 75009 Paris
        </p>

        <p className="user__info">
          <PhoneIphoneIcon /> 
          <a href="tel:+33663934633">0663934633</a>
        </p>

        <p className="user__info">
          <EmailIcon />
          <a href="mailto:nicolasribeiro75@gmail.com">nicolasribeiro75@gmail.com</a>
          </p>

        <p className="user__info"> <EventIcon /> Date De Naissance : 10 Décembre 1988</p>
        <p className="user__info"> <LocationOnIcon /> Lieu De Naissance : Paris</p>
      </div>

    </div>
  )
}

export default User
