import React from 'react'
import './Construction.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import 'react-social-icons/whatsapp'
import Footer from '../../Footer/Footer'


const Construction = () => {
  return (
    <div className='construction'>
      <h1>Em <br />Construção</h1>
      <p className='construction_pg'>Portifólio está quase pronto </p>
      <div className="progress">
        <div className="progress-bar">
            <div className="progress-bar_fill" />
        </div>
        <div className="progress_label">
            <p>0%</p>
            <p>100%</p>
        </div>
      </div>

        <div className="socials">
            <SocialIcon className='icons' target='_blank' url="https://www.linkedin.com/in/kim-bioni-9ba8a614b/" bgColor='transparent'  />
            <SocialIcon className='icons' target='_blank'  url="https://www.instagram.com/k.bioni" bgColor='transparent' />
            <SocialIcon className='icons' target='_blank'  url="https://github.com/kimbioni" bgColor='transparent' />
            <SocialIcon className='icons' target='_blank'  url="https://wa.me/5515981297246" network='whatsapp' bgColor='transparent' />
        </div>
        <Footer />

    </div>
  )
}

export default Construction
