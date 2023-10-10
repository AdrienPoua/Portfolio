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
                <li>Openclassroom</li>
                <li>Basket-ball   ❤</li>
                <li>React</li>
                <li>Paris</li>
                <li>Paris</li>
            </ul>
        </div>
    );
}
