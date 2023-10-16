import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Badge } from 'react-bootstrap';
import { icones } from '../../variables/icones';

export default function Project({
    image,
    title,
    description,
    year,
    tags,
    technologies,
    github,
    url,
    srcset: imageMobile,
}) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const [projectImage, setProjectImage] = useState(
        windowSize > 576 ? image : imageMobile
    );

    useEffect(() => {
        const handleResize = () =>
            setWindowSize({ width: window.innerWidth });
        window.addEventListener('resize', handleResize);

        return () =>
            window.removeEventListener(
                'resize',
                handleResize
            );
    }, []);

    useEffect(() => {
        setProjectImage(
            windowSize.width > 576 ? image : imageMobile
        );
    }, [windowSize, image, imageMobile]);
    return (
        <div
            className={`${styles.project} mb-5 p-0 position-relative`}>
            <a
                className={`position-relative overflow-hidden ${styles.height}`}
                href={url}
                target='_blank'
                rel='noreferrer'>
                <img
                    alt='Aperçu du projet'
                    src={projectImage}
                    className={`rounded-top project-hover object-fit-fill object-fit-md-cover ${styles.image}`}
                />
                <div
                    className={`d-flex flex-column position-absolute bottom-0 left-0 ps-4 pb-2 text-light`}>
                    <div className='fw-500 mb-1 fw-bold fs-4'>
                        <div
                            className={`fit-content ${styles.background} px-1 bg-opacity-75`}>
                            {year}
                        </div>
                    </div>
                    <div className='fit-content'>
                        <h2
                            className={`fw-bold lh-1 px-1 ${styles.background} bg-opacity-75 text-capitalize fs-1 lh-1`}>
                            {title}
                        </h2>
                    </div>
                    <div className='fit-content'>
                        <p
                            className={`fs-3 lh-1 px-1 fit-content ${styles.background} bg-opacity-75`}>
                            {description}
                        </p>
                    </div>
                </div>
            </a>
            <div
                className={` d-flex justify-content-between p-1 `}>
                <ul className='d-flex gap-2 gap-md-4  justify-content-center align-items-center ps-2 h-100 flex-wrap'>
                    {github && (
                        <li className=''>
                            <a
                                href={github}
                                target='_blank'
                                rel='noreferrer'
                                className={styles.link}>
                                <Badge
                                    bg='black'
                                    text='light'
                                    className={`d-flex align-items-center hover-translate gap-2 fs-5 px-2 px-md-5 ${styles.badge}`}>
                                    <svg
                                        stroke='currentColor'
                                        fill='none'
                                        stroke-width='2'
                                        viewBox='0 0 24 24'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        height='18'
                                        width='18'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                                    </svg>{' '}
                                    GitHub
                                </Badge>
                            </a>
                        </li>
                    )}
                    {tags.map((tag, index) => (
                        <li
                            className='p-0'
                            key={index}>
                            <Badge
                                bg='secondary'
                                text='light'
                                className={`d-flex align-items-center gap-2 fs-5 px-3 ${styles.badge}`}>
                                {tag}
                            </Badge>
                        </li>
                    ))}
                </ul>
                <ul
                    className={`flex-wrap d-flex p-0 gap-2  align-items-center justify-content-md-center h-100 ${styles.techs}`}>
                    {technologies.map((tech, index) => (
                        <li key={index}>
                            <img
                                src={icones.get(tech)}
                                alt={tech}
                                className={`d-flex align-items-center gap-2 fs-1 ${styles.badge}`}></img>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
