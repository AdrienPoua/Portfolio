import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';

export default function Form() {
   const isButtonDisabled = false
   const handleClick = (e) => {
    e.preventDefault()
   }
  return (
    <form
      className="d-flex flex-column"
      action='traitement.php'
      method='POST'
    >
      <label
        className="mb-1"
        htmlFor='email'
      >
        Email
      </label>
      <input
        className="p-2 rounded mb-3 "
        type='email'
        id='email'
        name='email'
        placeholder='john@doe.fr'
        required
      />

      <label
        className="mb-1"
        htmlFor='message'
      >
        Message
      </label>
      <textarea
        className="p-2 mb-4 rounded "
        id='message'
        name='message'
        placeholder='Que souhaitez-vous dire ?'
        rows='4'
        required
      />
    <button className='btn btn-info w-25 m-auto' onClick={handleClick} type='submit' >
      Merci
    </button>

    </form>
  );
}
