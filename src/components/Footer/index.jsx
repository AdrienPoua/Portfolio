import React from 'react';
import styles from './styles.module.scss';
import Form from '../form';
import Clipboard from '../Clipboard';
export default function Index() {
  return (
    <footer>
      <div className={styles.container}>
        <h2 className={styles.h2}>Me contacter</h2>
        <Clipboard />
        <p className={styles.message}>
          Ou, si vous préférez un formulaire
        </p>
        <Form />
      </div>
    </footer>
  );
}
