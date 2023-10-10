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
                anchor={'competences'}
            />
            <Container className='mt-5'>
                <Row className="flex-column flex-xl-row gap-7">
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Skill
                            skills={skills[0]}
                        />
                    </Col>
                    <Col className='d-flex justify-content-center gap-6 flex-column flex-md-row align-items-center '>
                            <Skill
                                skills={skills[1]}
                                size = {"small"}
                                />
                            <Skill
                                skills={skills[2]}
                                size = {"small"}
                            />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Skill
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
