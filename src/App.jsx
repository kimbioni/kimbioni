import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </div>
  )
}

export default App
