import React, { useState } from 'react';
import {
  FaRegClipboard,
  FaClipboardCheck,
} from 'react-icons/fa';
import styles from './styles.module.scss';
import { email } from '../../variables';

export default function Clipboard() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked)
      navigator.clipboard.writeText(email);
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };
  
  return (
    <button
      onClick={handleClick}
      className={styles.clipboard}
    >
      <div
        className={`${styles.clipboard__email} ${
          clicked ? styles['clipboard__email--active'] : ''
        }`}
      >
        {clicked
          ? 'Copié dans le presse-papiers'
          : 'adrien.poua@gmail.com'}
      </div>
      <FaRegClipboard
        className={`${styles.clipboard__icone} ${
          clicked ? styles['hidden'] : ''
        }`}
      />
      <FaClipboardCheck
        className={`${styles.clipboard__icone} ${
          styles['clipboard__icone--checked']
        } ${clicked ? '' : styles.hidden}`}
      />
    </button>
  );
}
