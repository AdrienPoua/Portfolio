import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '../../components/Subtitle';
import Challenge from '../../components/Challenge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index({ challenges }) {
    return (
        <section className={styles.section}>
            <Subtitle
                anchor={'challenges'}
                content={'Challenges'}
            />
            <Container>
                <Row className='mb-4'>
                    <Col className='d-flex flex-wrap gap-5 justify-content-center '>
                        {challenges.length > 0 &&
                            challenges.map(
                                ({ tags, _id, img }) => (
                                    <Challenge
                                        tags={tags}
                                        key={_id}
                                        img={img}
                                        id={_id}
                                    />
                                )
                            )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
