import React from 'react';
import styles from './styles.module.scss';

export default function Project({
  content,
  anchor,
  version,
}) {
  return (
    <>
      <h2
        style={version === "light" ? { '--color': 'white' } : {"--color": "black"}}
        className={styles.title}
        id={anchor}
      >
        {content}
      </h2>
    </>
  );
}
