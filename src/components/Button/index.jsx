import React from 'react';
import styles from './styles.module.scss';

export default function Button({ type, handleClick, className, content: { icone, content }, disabled }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`${styles.btn} ${styles[className]} ${disabled ? styles['btn--disabled'] : ''}`}
      disabled={disabled}
    >
      {icone}
      {content}
    </button>
  );
}
