import React from 'react';
import styles from './styles.module.scss';
import Navbar from '../Navbar/';

export default function Index() {

  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}
