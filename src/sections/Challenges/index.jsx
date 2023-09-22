import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '../../components/Subtitle';
import Challenge from '../../components/Challenge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ChallengeSVG } from '../../variables/index'

export default function Index({ challenges }) {
    return (
        <section className={styles.section}>
            <Subtitle
                anchor={'challenge'}
                content={'Challenges'}
            />
            <Container>
                <Row className='mb-4'>
                    <Col className='d-flex flex-wrap gap-5 justify-content-center '>
                        {challenges.length > 0 &&
                            challenges.map(
                                ({
                                    language,
                                    tags,
                                    _id,
                                }) => (
                                    <Challenge
                                        logo={ChallengeSVG.get(
                                            language
                                        )}
                                        key={_id}
                                        id={_id}
                                        badges={tags}
                                    />
                                )
                            )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
