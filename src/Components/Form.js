import React, { useState } from 'react'
import '../Styling/Form.css'

const Form = ({ submitQuestion }) => {
  const [ question, setQuestion ] = useState('')

  const clearQuestion = () => {
    setQuestion('')
  }

  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();
        submitQuestion(question)
        clearQuestion();
      }}
    >
      <label>Your Query:
        <textarea 
          rows='2'
          cols='65'
          placeholder='ex: What is the airspeed velocity of a coconut-laden swallow?'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <button className='submit-button'>Ask Away!</button>
    </form>
  )
}

export default Form