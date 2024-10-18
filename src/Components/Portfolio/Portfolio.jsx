import React from 'react'
import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Construction from './Construction/Construction'


const Portfolio = () => {
  return (
    <div id='portfolio1' className='portfolio'>
      <div className="portfolio-title">
        <div>
        <h1>Meu Portifólio</h1>
        <img src={theme_pattern} />
        </div>
      </div>
      <div className="portfolio-content">
        <Construction />
      </div>
    </div>
  )
}

export default Portfolio
