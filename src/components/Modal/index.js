import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { modalContext } from '../../app';
import { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function Modale({ challenges }) {
    const {
        isOpen,
        setIsOpen,
        challengeActive,
    } = useContext(modalContext);

    return (
        <>
            <Modal
                className=''
                show={isOpen}
                fullscreen={true}
                onHide={() => setIsOpen(false)}
            >
                <Modal.Body
                    className='p-0'
                    closeButton
                >
                    <iframe
                        className='w-100 h-100 position-relative'
                        src={
                            challenges.find(
                                (challenge) =>
                                    challenge._id ===
                                    challengeActive
                            )?.url
                        }
                        title='Challenge'
                    ></iframe>

                    <Button
                        className='position-absolute bottom-0 start-50 translate-middle m-3 fs-1'
                        variant='info'
                        onClick={() => setIsOpen(false)}
                    >
                        {' '}
                        Retour au site{' '}
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}
