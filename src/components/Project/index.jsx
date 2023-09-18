import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';
import { Badge } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';

export default function Project({
  image,
  title,
  description,
  year,
  tags,
  technologies,
}) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={`${styles.project} mb-5 p-0 `} >
      <a
        className={`position-relative ${styles.height}`}
        href='test'
      >
        <img
          src={image}
          alt='Apercçu du projet'
          className='rounded-top'
        />

        <div
          className={`d-flex flex-column position-absolute bottom-0 left-0 ps-4 pb-2 text-light`}
        >
          <div className='fw-500 fw-bold fs-4 '>{year}</div>
          <h2 className='fw-bold text-capitalize fs-1'>
            {title}
          </h2>
          <p className='fs-3'>{description}</p>
        </div>
      </a>
      <div
        className={`${styles.height} d-flex justify-content-between p-1 `}
      >
        <ul className='d-flex gap-4  justify-content-center align-items-center ps-2 h-100 flex-wrap'>
          {tags.map(({ title, link, icone }, index) => (
            <li
              className='p-0'
              key={index}
            >
              <Badge
                bg='secondary'
                text='dark'
                className={`d-flex align-items-center gap-2 fs-5 px-5 ${styles.badge}`}
              >
                {icone && (
                  <img
                    src={icone}
                    className={`${styles.colorBurn}`}
                    alt=''
                    srcset=''
                  />
                )}
                {title}
              </Badge>
            </li>
          ))}
        </ul>
        <ul className='flex-wrap d-flex p-0 d-flex align-items-center justify-content-center h-100'>
          {technologies.map(({ tech, image }, index) => (
            <li key={index}>
              <img
                src={image}
                alt={tech}
                className={`d-flex align-items-center gap-2 fs-1 ${styles.badge}`}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
