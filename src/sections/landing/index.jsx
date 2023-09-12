import React from 'react';
import styles from './styles.module.scss';
import Header from '../../components/Header';

export default function Index() {
  return (
    <section className={styles.landing}>
      <Header />
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.h1}>
            Adrien <br /> Poua
          </h1>
          <h2 className={styles.h2}>
            Développeur Front-end
          </h2>
          <p className={styles.p}>
            Autodidacte de 23 ans, je suis passionné par le
            développement web, l'UI/UX et l'accessibilité
            depuis 9 ans.
          </p>
          <button className={styles.cta}>
            {' '}
            Me contacter{' '}
          </button>
        </div>
        <div className={styles.col}></div>
      </div>
      <div className={styles.anchor}>
        <a
          className={styles.a}
          href='tqt'
        >
          {' '}
          Me découvrir{' '}
        </a>
        <div className={styles.arrow__wrapper}>
          <button className={styles.arrow}></button>
        </div>
      </div>


    </section>
  );
}
