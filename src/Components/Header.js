import React from 'react';
import robot from '../Assets/robot.png';
import '../Styling/Header.css'

const Header = () => {
  return (
    <section className='header'>
      <h1>ASK ME ANYTHING!</h1>
      <img src={robot} alt='AI robot icon' className='robot'/>
    </section>
  )
}

export default Header