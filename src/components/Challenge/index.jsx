import Card from 'react-bootstrap/Card';
import React from 'react';
import { useContext } from 'react';
import { modalContext } from '../../app';
import styles from './styles.module.scss';
import { icones } from '../../variables/icones';

export default function Index({ tags, id, img }) {
    const { setIsOpen, setChallengeActive } =
        useContext(modalContext);

    const handleClick = () => {
        setIsOpen(true);
        setChallengeActive(id);
    };

    return (
        <Card
            className={`shadow card-hover ${styles.height}`}
            onClick={handleClick}
            data-id={id}>
            <Card.Img
                variant='top'
                src={img}
            />
            <Card.Body className='p-3'>
                <ul className='p-0 m-0 d-flex gap-5'>
                    {tags.map((tag) => (
                        <li
                            className='w-25 '
                            key={tag}>
                            <img
                                src={icones.get(tag)}
                                alt={tag}
                                className='object-fit-contain'
                            />
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
}
