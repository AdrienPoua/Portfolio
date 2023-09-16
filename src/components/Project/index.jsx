import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

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
    <>
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
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </a>
      <div className={styles.items}>
        <ul className={styles.tags}>
          {tags.map(({ title, link, icone }, index) => (
            <li
              key={index}
              className={styles.tag}
            >
              { link ? <a
                href='test'
                className={styles.link}
              >
                <Button
                  className='btn--project'
                  content={{
                    icone: icone && (
                      <img
                        src={icone}
                        className={styles.icone}
                        alt={title}
                      />
                    ),
                    content: title,
                  }}
                  disabled={!link}
                />
              </a> :            <Button
                  className='btn--project'
                  content={{
                    icone: icone && (
                      <img
                        src={icone}
                        className={styles.icone}
                        alt={title}
                      />
                    ),
                    content : title,
                  }}
                  disabled={!link}
                />}
            </li>
          ))}
        </ul>
        <ul className={styles.techs}>
          {technologies.map(({ tech, image }, index) => (
            <li
              key={index}
              className={styles.item}
            >
              <img
                src={image}
                alt={tech}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
