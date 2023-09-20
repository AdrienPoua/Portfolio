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
        setChallengeActive,
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
                        variant='light'
                        onClick={() => setIsOpen(false)}
                    >
                        {' '}
                        Retour au site{' '}
                    </Button>

                    <button
                        className='position-absolute top-50  start-0  p-5 translate-middle'
                        data-position='left'
                        onClick={() => setIsOpen(false)}
                    >
                        <div className={styles.arrow}></div>{' '}
                    </button>
                    <button
                        className='position-absolute top-50 end-0 p-3 translate-middle'
                        data-position='right'
                        onClick={() => setIsOpen(false)}
                    >
                        <div className={styles.arrow}></div>{' '}
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
}
