import React from 'react'
import '../Styling/Card.css'

const Card = ({ question, answer }) => {
  return (
    <section className='card'>
      <p className='question'>{question}</p>
      <p className='answer'>{answer}</p>
    </section>
  )
}

export default Card