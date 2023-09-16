import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Context } from '../../app';
import Subtitle from '../../components/Subtitle';
import { Row, Col } from 'react-bootstrap';

export default function Index({ lang }) {
  const [language, setLanguage] = useContext(Context);
  return (
    <section className="bg-black text-light p-5">
        <Subtitle anchor={"about"} content={"About"} version={"light"} />
        <Row>
          <Col>
        <p>
          À propos de moi Je suis passionné par le
          développement front-end et le web design, étant
          sensibilisé à l'expérience utilisateur et
          l'accessibilité, je développe des projets centré
          autour de l'Humain.
        </p>
        <p className="pb-5">
          De plus, je suis intéressé par le monde de
          l'open-source, je suis contributeur de plusieurs
          projets et je suis en parallèle attiré par
          l'enseignement (talks, articles, mentoring).
        </p>
          </Col>
          <Col>
        <p>
          À propos de moi Je suis passionné par le
          développement front-end et le web design, étant
          sensibilisé à l'expérience utilisateur et
          l'accessibilité, je développe des projets centré
          autour de l'Humain.
        </p>
        <p className="pb-5">
          De plus, je suis intéressé par le monde de
          l'open-source, je suis contributeur de plusieurs
          projets et je suis en parallèle attiré par
          l'enseignement (talks, articles, mentoring).
        </p>
          </Col>
        </Row>
    </section>
  );
}
