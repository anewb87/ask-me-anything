import React from 'react';
import Card from './Card';
import '../Styling/AnswersContainer.css'

const AnswersContainer = ({ answers }) => {

  const determineDisplay = () => {
    if (answers.length) {
      const cards = answers.map(answer => {
        return (
          <Card
            id={answer.id}
            key={answer.id}
            question={answer.question}
            answer={answer.response}
          />
        )
      })
      return cards
    } else {
      return (
        <p>We haven't chatted yet. Please, ask me something.</p>
      )
    }
  }

  return  (
    <section>
      <h2>Our Conversations</h2>
      <div>
        {determineDisplay()}
      </div>
    </section>
  )
  
}

export default AnswersContainer