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
      className={styles.form}
      action='traitement.php'
      method='POST'
    >
      <label
        className={styles.form__label}
        htmlFor='email'
      >
        Email
      </label>
      <input
        className={styles.form__input}
        type='email'
        id='email'
        name='email'
        placeholder='john@doe.fr'
        required
      />

      <label
        className={styles.form__label}
        htmlFor='message'
      >
        Message
      </label>
      <textarea
        className={styles.form__input}
        id='message'
        name='message'
        placeholder='Que souhaitez-vous dire ?'
        rows='4'
        required
      />

      <Button
        type='submit'
        handleClick={handleClick}
        className='btn--form'
        content='Cliquez-moi'
        disabled={isButtonDisabled}
      />
    </form>
  );
}
