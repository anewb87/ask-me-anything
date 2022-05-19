import React, { useState} from 'react';
import Header from './Header';
import Form from './Form';
import AnswersContainer from './AnswersContainer';
import Error from './ErrorModal';
import { getAnswer } from '../apiCalls';
import '../Styling/App.css'

const App = () => {
  const [ answers, setAnswers ] = useState([]);
  const [error, setError] = useState(false);
  
  
  const submitQuestion = (input) => {
    getAnswer(input)
      .then(data => setAnswers([
          {question: input, response: data.choices[0].text}, ...answers
        ]))
      .catch(error => setError(error.message))
  }

  return (
    <main className='app'>
      <Header/>
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
