import React from 'react';
import '../Styling/Modal.css';

const IdeasModal = ({ toClose }) => {
  return (
    <section className='modal' onClick={toClose}>
      <div className='modal-message ideas'>
        <p>Ideas</p>
        <ul className='list'>
          <li>Why?</li>
          <li>Write me a haiku about hedgehogs.</li>
          <li>How do I write bug-free code?</li>
          <li>Why is 'The Great British Bake-Off' so dang addicting?</li>
          <li>Looking for an answer to the question you didn't know you had? Enter nothing and be amazed by my response!</li>
        </ul>
        <button className='modal-button'
          onClick={toClose}>Go Back
        </button>
      </div>
    </section>
  )
}

export default IdeasModal
