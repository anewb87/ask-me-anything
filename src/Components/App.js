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
      <header className='header'>ASK ME ANYTHING!</header>
      <p>Pontificating upon a problem? <br/> Perhaps you're hungry for a hedgehog haiku or in need of some knot knowledge. <br/>
      Tell me what you want (what you really, really want) to know, and I'll tell you no lies.<br/>
      While I may not be human, I've still got a lot to say. </p>
      <Form submitQuestion={submitQuestion}/>
      {/* {errorMessage.length > 0 && <Error errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>} */}
      <AnswersContainer answers={answers}/>
      <Error 
        error={error}
        toClose={() => setError(false)}
      />
    </main>
  );
}

export default App;
