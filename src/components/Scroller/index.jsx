import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export default function Index({ reverse, speed }) {
    const scrollerRef = useRef(null);
    const scrollerInnerRef = useRef(null);

    const duplicate = () => {
        if (scrollerInnerRef.current) {
            const scrollerContent = Array.from(
                scrollerInnerRef.current.children
            );
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute(
                    'aria-hidden',
                    'true'
                );
                scrollerInnerRef.current.appendChild(
                    duplicatedItem
                );
            });
        }
    };

    useEffect(() => {
        duplicate();
    }, []);

    return (
        <div
            ref={scrollerRef}
            data-speed={speed}
            data-animated
            {...(reverse && { 'data-direction': 'right' })}
            className={`${styles.scroller} mb-2 `}>
            <ul
                ref={scrollerInnerRef}
                className={`${styles['tag-list']} ${styles.scroller__inner}`}>
                <li className='px-4 '>Openclassroom</li>
                <li className='px-4 '>Basket-ball 🏀 </li>
                <li className='px-4 '> 28 ans </li>
                <li className='px-4 '>React</li>
                <li className='px-4 '>Paris </li>
                <li className='px-4 '>Jeux video 🎮 </li>
                <li className='px-4 '>Sport </li>
                <li className='px-4 '>Arbitre 🏀 </li>
                <li className='px-4 '>Apprendre 🧠 </li>
            </ul>
        </div>
    );
}
