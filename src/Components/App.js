import React, { useState} from 'react';
import Form from './Form';
import AnswersContainer from './AnswersContainer';
import Error from './ErrorModal';
import { getAnswer } from '../apiCalls';
import '../Styling/App.css'

const App = () => {

  const [ answers, setAnswers ] = useState([]);
  const [error, setError] = useState(false)
  
  const submitQuestion = (input) => {
    getAnswer(input)
      .then(data => setAnswers([
          {question: input, response: data.choices[0].text}, ...answers
        ]))
      .catch(error => setError(error.message))
  }

  return (
    <main className='app'>
      <header className='header'>
        <h1>ASK ME ANYTHING!</h1>
      </header>
      <p>I may not be human, but I've got a lot to say. What would you like to know?</p>
      <Form submitQuestion={submitQuestion}/>
      <AnswersContainer answers={answers}/>
      <Error 
        error={error}
        toClose={() => setError(false)}
      />
    </main>
  );
}

export default App;
