import React, { useState } from 'react'
import '../Styling/Form.css'

const Form = ({ submitQuestion }) => {
  const [ question, setQuestion ] = useState('')

  const clearQuestion = () => {
    setQuestion('')
  }

  return (
    <section>
      <p className='intro'>DOOR-E here! Nice to meet you. <br/>I'm your personal AI encyclopedia, and while I may not be human, I've sure got a lot to say. <br/>What would you like to know?</p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          submitQuestion(question)
          clearQuestion();
        }}
      >
        <label>YOUR QUERY:
          <textarea 
            rows='2'
            cols='65'
            placeholder='ex: What is the airspeed velocity of a coconut-laden swallow?'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
          <button className='form-button'>Ask Away!</button>
      </form>
    </section>
  )
}

export default Form