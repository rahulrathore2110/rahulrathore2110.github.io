import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Service from './Components/service/Service'
import Skills from './Components/skills/Skills'
import Projects from './Components/projects/Projects'
import Footer from './Components/footer/Footer'
import Contact from './Components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Service />
      <Projects />
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
