import React from 'react';
import styles from './styles.module.css';
import Button from '../button';

export default function Project({
  image,
  title,
  description,
  year,
  tags,
  techImage,
  technologies,
}) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <a
      href='test'
      className={styles.project}
    >
      <img
        src={image}
        alt='Apercçu du projet'
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.year}>{year}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.tags}>
        {tags.map(({title, link, icone}, index) => (
          <li
            key={index}
            className={styles.list}
          >
            {icone && <img  src={icone} alt={title} />}
            <Button
              className='btn--project'
              content={title}
              disabled={link ? false : true}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.techs}>
        {technologies.map((tech, index) => (
          <li
            key={index}
            className={styles.list}
          >
            <img
              src={techImage}
              alt={tech}
            ></img>
          </li>
        ))}
      </ul>
    </a>
  );
}
