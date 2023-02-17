import React from 'react'
import"./Hero.css"
//  import image from './image1.jpg'



function Hero(props) {
  return (
    <div className={props.cName}>
        
      <img src={props.image} alt="/"/>
     
    <div className='hero-text'>
        <h1>{props.title}  </h1>
        <p>{props.text}</p>
    </div>
    </div>
  )
}

export default Hero
