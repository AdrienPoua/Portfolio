import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { TbLanguageHiragana } from 'react-icons/tb';
import { Context } from '../../app';

export default function Index({ lang }) {
  const [language, setLanguage] = useContext(Context);
  const handleClick = () => setLanguage((prev) => !prev);
  return (
    <section className={styles.landing}>
      <div className={styles.header}>
        <button
          className={styles.btn}
          onClick={handleClick}
        >
          {' '}
          <TbLanguageHiragana className={styles.svg} />
          {language ? 'Français' : 'English'}
        </button>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                className={styles.a}
                href=''
                className={styles.a}
              >
                About
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=''
                className={styles.a}
              >
                {' '}
                Compétences
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=''
                className={styles.a}
              >
                Mes projets
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=''
                className={styles.a}
              >
                {' '}
                Having fun
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=''
                className={styles.a}
              >
                {' '}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
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
