import React from 'react';
import styles from './styles.module.scss';

export default function index() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            className={styles.a}
            href='#test'
          >
            About
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#test'
            className={styles.a}
          >
            {' '}
            Compétences
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#test'
            className={styles.a}
          >
            Mes projets
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#test'
            className={styles.a}
          >
            {' '}
            Having fun
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#test'
            className={styles.a}
          >
            {' '}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
