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

export default function Index() {
    return (
        <section
            className={` ${styles['section__landing']} d-flex flex-column `}>
            <Header />
            <Container className=' d-flex flex-grow-1'>
                <Row className='d-flex flex-grow-1'>
                    <Col className='col-6 d-flex flex-column justify-content-center'>
                        <h1 className=' display-1'>
                            Poua <br /> Adrien
                        </h1>
                        <h2 className=''>
                            Développeur Front-end
                        </h2>
                        <p>
                            Autodidacte de 23 ans, je suis
                            passionné par le développement
                            web, l'UI/UX et l'accessibilité
                            depuis 9 ans.
                        </p>
                        <a href='#contact'>
                            <Button
                                variant='dark'
                                className='w-50 mx-auto'>
                                Me contacter
                            </Button>
                        </a>
                    </Col>
                    <Col className='col-6 d-flex flex-column justify-content-center'>
                    <Coder />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
