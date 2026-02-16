import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Slider from './assets/Components/Slider'
// import Card from './assets/Components/card'
import Courses from './assets/Components/Courses'
import Contact from './assets/Components/Contact'
import Footer from './assets/Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <Courses />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
