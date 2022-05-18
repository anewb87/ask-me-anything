import React from 'react'
import '../Styling/Card.css'

const Card = ({ id, question, answer }) => {
  return (
    <section>
      <p>Your Question: {question}</p>
      <p>My Answer: {answer}</p>
    </section>
  )
}

export default Card