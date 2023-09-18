import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { useContext } from 'react';
import {modalContext} from '../../app';


export default function Index({ title, badge }) {
  const [isOpen, setIsOpen] = useContext(modalContext);
  const js = '#f7e018';
  const css = '#2965f1';
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <Card className='shadow card-hover' onClick={handleClick}>
      <Card.Img
 
        variant='top'
        src='https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />
      <Card.Body className='px-4 '>
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Row>
          {badge.map((item, index) => (
            <Badge
              key={index}
              pill
              className={`fs-5 d-inline-block w-auto px-4 me-3 mb-2 ${
                item === 'JavaScript' ? 'bg-warning' : 'bg-primary'
              }`}
                          >
              {item}
            </Badge>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
