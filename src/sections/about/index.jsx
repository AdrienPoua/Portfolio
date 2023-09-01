import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { TbLanguageHiragana } from 'react-icons/tb';
import { Context } from '../../app';


export default function Index({lang}) {
  const [language, setLanguage] = useContext(Context)
  return (
    <section className={styles.landing}>
      
    </section>
  );
}
