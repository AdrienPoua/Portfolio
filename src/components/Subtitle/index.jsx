import React from 'react';
import styles from './styles.module.scss';
import Fun from '../Fun';

export default function Project({ content }) {
  return (
    <>
      <h2 className={styles.title}> {content} </h2>
    </>
  );
}
