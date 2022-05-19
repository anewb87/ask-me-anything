import React, { useState } from 'react';
import IdeasModal from './IdeasModal';
import '../Styling/Form.css'

const Form = ({ submitQuestion }) => {
  const [ question, setQuestion ] = useState('');
  const [ideas, setIdeas] = useState(false);

  const clearQuestion = () => {
    setQuestion('')
  }

  if (ideas) {
    return (
      <IdeasModal toClose={() => setIdeas(false)}/>
    )
  }

  return (
    <section>
      <p className='intro'>DOOR·E here! Nice to meet you. <br/>I'm your personal AI encyclopedia, and while I may not be human, I've sure got a lot to say. <br/>What would you like to know?</p>
      <form
        className='form'
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
        <div className='button-container'>
          <button
            className="form-button ideas-button"
            onClick={(e) => {
              e.preventDefault();
              setIdeas(true);
            }}
            >Ideas!
          </button>
          <button 
            className='ask-button'
            onClick={(e) => {
              e.preventDefault();
              submitQuestion(question)
              clearQuestion();
            }}>Ask Me!
          </button>
          <button
            className="form-button more-ideas-button"
            onClick={() => window.open('https://faculty.washington.edu/ejslager/random-generator/index.html')}>Even More Ideas!
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form