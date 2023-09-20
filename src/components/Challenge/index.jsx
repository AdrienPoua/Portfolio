import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { modalContext } from '../../app';
import styles from './styles.module.scss';

export default function Index({ title, logo, badges, id }) {

  const {
    setIsOpen,
    setChallengeActive,
  } = useContext(modalContext);
  
  const handleClick = () => {
    setIsOpen(true);
    setChallengeActive(id);
  };

  return (
    <Card
      className={`shadow card-hover ${styles.height}`}
      onClick={handleClick}
      data-id={id}
    >
      <Card.Img
        variant='top'
        src='https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />
      <Card.Body className='p-3'>
        <ul className='p-0 m-0 d-flex flex-wrap gap-2'>
          <li> {logo} </li>
          {badges.map((item, index) => (
            <li className="d-flex align-items-center flex-grow-1" key={index}>
              <Badge className="fs-5 text-justify flex-grow-1 " bg='info'>{item}</Badge>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
