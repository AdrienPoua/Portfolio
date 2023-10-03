import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '../../components/Subtitle';
import Skill from '../../components/Skill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { skills } from '../../variables';

export default function Index() {
    return (
        <section className={styles.skills}>
            <Subtitle
                content={'Mes compétences'}
                anchor={'skills'}
            />
            <Container>
                <Row className="flex-column flex-lg-row gap-5">
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Skill
                            size='300'
                            fs='fs-4'
                            skills={skills[0]}
                        />
                    </Col>
                    <Col className='d-flex justify-content-center gap-5 flex-lg-column'>
                            <Skill
                                size='150'
                                fs='fs-4'
                                skills={skills[1]}
                            />
                            <Skill
                                size='175'
                                fs='fs-5'
                                skills={skills[2]}
                            />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Skill
                            size='200'
                            fs='fs-4'
                            skills={skills[3]}
                            progress={true}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
