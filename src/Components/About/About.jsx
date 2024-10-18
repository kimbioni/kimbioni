import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profileImage2.jpg'
import Skills from './Carousel/Skills'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>Sobre mim</h1>
        <img className='bg-img' src={theme_pattern} />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-pg">
                <p>Sou Engenheiro Civil e após anos na área, resolvi migrar para programação, estou em busca da minha primeira oportunidade, trazendo muita dedicação e vontade de aprender. Com uma base sólida adquirida por meio de estudos e projetos práticos.</p>
                <p>Meu objetivo é transformar ideias em interfaces funcionais e atraentes, criando experiências visuais interativas que conectam diretamente o usuário à tecnologia</p>
            </div>
            <div className='habilidades'>
              <div className='habilidades-content'>
                  <p className='habilidades-title'>Habilidades</p>
                  <img className='bg-img' src={theme_pattern} />
              </div>
            <Skills />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
