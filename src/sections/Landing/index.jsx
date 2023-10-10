import React from 'react';
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap'; // Utilisation des composants Bootstrap React

import Header from '../../components/Header'; // Assurez-vous d'importer correctement votre en-tête

import styles from './styles.module.scss'; // Importation du module de styles
import Coder from '../../components/Coder';
import Letter from '../../components/Letter'


export default function Index() {
    return (
        <section
            className={` ${styles['section__landing']} d-flex flex-column `}>
            <Header />
            <Container className=' d-flex flex-grow-1'>
                <Row className='d-flex flex-grow-1'>
                    <Col className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                        <h1 className=' display-1'>
                            Poua <br /> Adrien
                        </h1>
                        <h2 className='fs-1 my-4'>
                            <Letter />
                        </h2>
                        <p className='fs-3'> 
                            Passionné par le développement
                            web. <br />
                            J'adore{' '}
                            <strong>apprendre </strong> et
                            relever de nouveaux défis.
                        </p>

                        <a href='#contact' className='col-6 mt-2 '>
                            <Button
                                variant='dark'
                                className=' w-100 mx-auto'>
                                Me contacter
                            </Button>
                        </a>
                    </Col>
                    <Col className='d-none d-lg-flex flex-column justify-content-center'>
                        <Coder />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
