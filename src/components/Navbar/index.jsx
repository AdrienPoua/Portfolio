import React from 'react';
import styles from './styles.module.scss';

export default function index() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            className={styles.link}
            href='#about'
          >
            About
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#skills'
            className={styles.link}
          >
            {' '}
            Compétences
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='projects'
            className={styles.link}
          >
            Mes projets
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#fun'
            className={styles.link}
          >
            {' '}
            Having fun
          </a>
        </li>
        <li className={styles.li}>
          <a
            href='#contact'
            className={styles.link}
          >
            {' '}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
