import React from 'react';
import styles from './styles.module.scss';
import Form from '../../components/Form';
import Clipboard from '../../components/Clipboard';
import Subtitlte from '../../components/Subtitle';
import { Row, Col } from 'react-bootstrap';

export default function Index() {
  return (
    <>
      <footer className='bg-black p-5 text-light fs-4'>
        <Subtitlte
          anchor={'contact'}
          version={'light'}
          content={'Contact'}
        />
        <Row>
          <Col className='col-4 m-auto'>
            <Clipboard />
            <p className='text-light mt-3 mb-3'>
              Ou, si vous préférez un formulaire
            </p>
            <Form />
          </Col>
        </Row>
      </footer>
    </>
  );
}
