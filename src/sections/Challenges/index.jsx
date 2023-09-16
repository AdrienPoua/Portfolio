import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '../../components/Subtitle';
import Challenge from '../../components/Challenge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';

export default function Index() {
  return (
    <section className={styles.section}>
      <Subtitle anchor={"challenge"} content={'Challenges'} />
      <Container>
         <Row className='mb-4'>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS", "test"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
        </Row>
         <Row className='mb-4'>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>

        </Row>
         <Row className='mb-4'>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
          <Col>
            <Challenge title='Oclock' badge={["JavaScript", "CSS"]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
