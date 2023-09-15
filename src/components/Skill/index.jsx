import React from 'react';
import styles from './styles.module.scss';
import MyProgress from '../MyProgress';

export default function Index({ size, image, progress }) {
  return (
    <>
    <div className={styles.container}>
    { progress && <MyProgress width={size}/>}
      <div
        className={styles.circle}
        style={{ width: size ? `${size}px` : '300px' }}
      >
        <div
          style={{
            width: size ? `${size / 2}px` : '100px',
            height: size ? `${size / 2}px` : '100px',
          }}
          className={`${styles.item} ${styles.left}`}
        >
          <h3
            style={{ fontSize: `${size / 100}em` }}
            className={styles.item__title}
          >
            React
          </h3>
          <div
            className={styles.item__circle}
            style={{
              width: size ? `${size / 4}px` : '100px',
            }}
          >
            <img
              src={image[0]}
              alt=''
              className={styles.item__image}
            />
          </div>
        </div>
        <div
          style={{
            width: size ? `${size / 2}px` : '100px',
            height: size ? `${size / 2}px` : '100px',
          }}
          className={`${styles.item} ${styles.right}`}
        >
          <h3
            style={{ fontSize: `${size / 100}em` }}
            className={styles.item__title}
          >
            React
          </h3>
          <div
            className={styles.item__circle}
            style={{
              width: size ? `${size / 4}px` : '100px',
            }}
          >
            <img
              src={image[1]}
              alt=''
              className={styles.item__image}
            />
          </div>
        </div>
        <div
          style={{
            width: size ? `${size / 2}px` : '100px',
            height: size ? `${size / 2}px` : '100px',
          }}
          className={`${styles.item} ${styles.bottom}`}
        >
          <h3
            style={{ fontSize: `${size / 100}em` }}
            className={styles.item__title}
          >
            React
          </h3>
          <div
            className={styles.item__circle}
            style={{
              width: size ? `${size / 4}px` : '100px',
            }}
          >

            <img
              src={image[2]}
              alt=''
              className={styles.item__image}
            />
          </div>
        </div>
        <div
          className={styles.dot}
          style={{ padding: size / 10 }}
        ></div>
      </div>
    </div>
    </>
  );
}
