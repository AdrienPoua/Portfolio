import React from 'react';
import Form from '../../components/Form';
import Clipboard from '../../components/Clipboard';
import Subtitle from '../../components/Subtitle';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

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
                                <Form isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
                            </Col>
                        </Row>
                    </div>
                )}
            </footer>
        </>
    );
}
