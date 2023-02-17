import React from 'react'
import Navbar from '../Navbar'
import Hero from "../components/Hero"


function Home() {
  return (
    <>
    <Navbar/>
      
      <Hero 
      cName="hero"
      image="https://plus.unsplash.com/premium_photo-1667824282674-04285eef14d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2OHx4alBSNGhsa0JHQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="normal"
      title=" DONATE"
      text="help people"
      />
    </>
  )
}

export default Home
