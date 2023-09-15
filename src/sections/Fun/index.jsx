import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '../../components/Subtitle';
import Fun from '../../components/Fun';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index() {
  return (
    <section className={styles.section}>
      <Subtitle content={'Having fun'} />
      <Container>
         <Row className='mb-4'>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
        </Row>
         <Row className='mb-4'>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
        </Row>
         <Row className='mb-4'>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Fun title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
