import React from 'react';
import styles from './styles.module.scss';
import Project from '../../components/Project';
import Subtitle from '../../components/Subtitle';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index({ projects }) {
    return (
        <section className='d-flex flex-column p-5'>
            <Subtitle
                anchor={'projets'}
                content={'Mes projets personnels'}
            />
            <Container className='container-sm'>
                <Row>
                    {projects.length > 0 &&
                        projects.map((project) => (
                            <Project
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={
                                    project.description
                                }
                                year={project.year}
                                tags={project.tags}
                                technologies={
                                    project.technologies
                                }
                                github={project.github}
                                url={project.url}
                                srcset={project.srcset}
                            />
                        ))}
                </Row>
            </Container>
        </section>
    );
}
