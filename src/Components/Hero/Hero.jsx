import React from 'react'
import './Hero.css'
import profileImg from '../../assets/profileImage.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='animation-border'  src={profileImg} alt="" />
      <h1><span>Me chamo Kim Bioni</span>, desenvolvedor frontend, situado no Brasil.</h1>
      <p>Em transição de carreira, busco primeira oportunidade na área de desenvolvedor frontend</p>
    </div>
  )
}

export default Hero
