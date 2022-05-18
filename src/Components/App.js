import React, { useState} from 'react';
import Form from './Form'
import { getAnswer } from '../apiCalls';
import '../Styling/App.css'

const App = () => {

  const [ answers, setAnswers ] = useState([])
  
  const submitQuestion = (input) => {
    getAnswer(input)
      .then(data => setAnswers([
          {question: input, response: data.choices[0].text}, ...answers
        ]))
  }

  return (
    <main className='app'>
      <header className='header'>ASK ME ANYTHING!</header>
      <p>Pontificating upon a problem? <br/> Perhaps you're hungry for a hedgehog haiku or in need of some knot knowledge. <br/>
      Tell me what you want (what you really, really want) to know, and I'll tell you no lies.<br/>
      While I may not be human, I've still got a lot to say. </p>
      <Form submitQuestion={submitQuestion}/>
    </main>
  );
}

export default App;
