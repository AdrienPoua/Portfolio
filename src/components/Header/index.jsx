import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa';
import _ from 'lodash';

export default function Index() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const [showLinks, setShowLinks] = useState(
        window.innerWidth > 768
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
        setShowLinks(windowSize.width > 768);
    }, [windowSize]);

    const toggleLinks = () => setShowLinks(!showLinks);
    const displayClass = showLinks ? 'bg-light' : '';

    const menuItems = [
        'About',
        'Compétences',
        'Projets',
        'Challenges',
        'Contact',
    ];

    return (
        <header className='d-flex justify-content-end'>
                          <button
                    className={`nav-toggle d-md-none mt-5 d-flex justify-content-center   ${
                        styles.hamburger
                    } ${
                        showLinks
                            ? styles['hamburger--active']
                            : ''
                    }`}
                    onClick={toggleLinks}>
                    <FaBars />
                </button>
            <nav
                className={`h-100 d-flex flex-column flex-md-row ${
                  showLinks
                      ? styles['navbar--active']
                      : ''
              } ${styles.navbar}`}>

                <ul
                    className={`${
                        styles.links
                    }  d-flex flex-column flex-md-row h-100 gap-5 align-items-end `}>
                    {menuItems.map((text, i) => (
                        <li
                            key={i}
                            className={`px-md-0 fs-4  `}>
                            <a
                                href={`#${_.deburr(
                                    text
                                ).toLowerCase()}`}
                                className={` text-dark  text-decoration-none`}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
