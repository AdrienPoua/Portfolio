import React from 'react';
import Form from '../../components/Form';
import Clipboard from '../../components/Clipboard';
import Subtitle from '../../components/Subtitle';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { icones } from '../../variables/icones';
import styles from './styles.module.scss';

export default function Index() {
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(isSubmit);

    return (
        <>
            <footer className='bg-black p-5 text-light fs-4'>
                {isSubmit ? (
                    <p className='text-success m-auto text-center'>
                        Votre message a bien été envoyé !
                    </p>
                ) : (
                    <div>
                        <Subtitle
                            anchor={'contact'}
                            version={'light'}
                            content={'Contact'}
                        />
                        <Row>
                            <Col className='col-lg-6 m-auto'>
                                <Clipboard
                                    isSubmit={isSubmit}
                                />
                                <p className='text-light mt-3 mb-3'>
                                    Ou, si vous préférez un
                                    formulaire
                                </p>
                                <Form
                                    isSubmit={isSubmit}
                                    setIsSubmit={
                                        setIsSubmit
                                    }
                                />
                            </Col>
                        </Row>
                    </div>
                )}
                <div className='py-5'>
                    {
                        <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
                            <p className='pt-3 '>Site construit avec</p>
                            <img
                                className={styles.icones}
                                src={icones.get('React')}
                                alt='React'
                            />
                            <img
                                className={styles.icones}
                                src={icones.get('Node')}
                                alt='NodeJS'
                            />
                            <img
                                className={styles.icones}
                                src={icones.get('AWS')}
                                alt='MongoDB'
                            />
                            <img
                                className={styles.icones}
                                src={icones.get(
                                    'Express-light'
                                )}
                                alt='ExpressJS'
                            />
                        </div>
                    }
                </div>
            </footer>
        </>
    );
}
