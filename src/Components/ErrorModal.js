import React from 'react';
import '../Styling/ErrorModal.css';

const Error = ({ error, toClose}) => {
  if (!error) {
    return null
  } else {
    return (
      <section className='modal' onClick={toClose}>
        <div className='modal-message'>
          <p>Oops! Something went wrong.</p>
          <p>{error}.</p>
          <button className='modal-button'
            onClick={toClose}>Try Again
          </button>
        </div>
      </section>
    )
  }
}

export default Error