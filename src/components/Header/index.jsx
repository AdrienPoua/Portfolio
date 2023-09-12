import React, { useContext } from 'react';
import styles from './styles.module.scss';
import Navbar from '../Navbar/';
import { TbLanguageHiragana } from 'react-icons/tb';
import { Context } from '../../app'

export default function Index() {

  const [language, setLanguage] = useContext(Context);
  const handleClick = () => setLanguage((prev) => !prev);

  return (
    <header className={styles.header}>
      <button
        className={styles.btn}
        onClick={handleClick}
      >
        {' '}
        <TbLanguageHiragana className={styles.svg} />
        {language ? 'Français' : 'English'}
      </button>
      <Navbar />
    </header>
  );
}
