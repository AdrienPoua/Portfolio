import React from 'react';
import styles from './styles.module.scss';

export default function Index({width}) {
  return (
    <div className={styles.absolute} style={{width : `${width}px`}} >
    <div
      className={`${styles.range} `}
      style={{ '--p': 20 }}
      >
      <div className={styles.range__label}> <span className='fs-3'>🧠</span> En cours </div>
    </div>
      </div>
  );
}
