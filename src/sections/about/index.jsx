import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Context } from '../../app';

export default function Index({ lang }) {
  const [language, setLanguage] = useContext(Context);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>

      <h2 className={styles.h2}>A propos de moi</h2>
      <p className={styles.p}>
        À propos de moi Je suis passionné par le
        développement front-end et le web design, étant
        sensibilisé à l'expérience utilisateur et
        l'accessibilité, je développe des projets centré
        autour de l'Humain.
        </p>
        <p className={styles.p}>
          De plus, je suis intéressé par le monde de
          l'open-source, je suis contributeur de plusieurs
          projets et je suis en parallèle attiré par
          l'enseignement (talks, articles, mentoring).
        </p>
      </div>
    </section>
  );
}
