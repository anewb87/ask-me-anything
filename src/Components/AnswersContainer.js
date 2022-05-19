import React from 'react';
import Card from './Card';
import '../Styling/AnswersContainer.css'

const AnswersContainer = ({ answers }) => {

  const determineDisplay = () => {
    if (answers.length) {
      const cards = answers.map((answer, i) => {
        return (
          <Card
            id={answer.id}
            key={i}
            question={answer.question}
            answer={answer.response}
          />
        )
      })
      return cards
    } else {
      return (
        <p className='conversation-request'>We haven't chatted yet. <br/>Please, ask me something.</p>
      )
    }
  }

  return  (
    <section>
      <h2 className='conversations'>Our Conversations</h2>
      <div className='answers-container'>
        {determineDisplay()}
      </div>
    </section>
  )
  
}

export default AnswersContainer