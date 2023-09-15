import React from 'react';
import styles from './styles.module.scss';
import Form from '../../components/Form';
import Clipboard from '../../components/Clipboard';
import Fun from '../../components/Fun'

export default function Index() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Me contacter</h2>
        <Clipboard />
        <p className={styles.message}>
          Ou, si vous préférez un formulaire
        </p>
        <Form />
      </div>
    </footer>

    </>
  );
}