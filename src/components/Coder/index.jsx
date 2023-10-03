import React from 'react';
import styles from './styles.module.scss';

function Index() {
    return (
        <>
            <div className={styles.frame}>
                <div className={styles.center}>
                    <div className={styles.ball}></div>
                    {Array.from({ length: 8 }, (_, i) => (
                        <div
                            key={`blubb-${i}`}
                            className={
                                styles[`blubb-${i + 1}`]
                            }></div>
                    ))}
                    {Array.from({ length: 10 }, (_, i) => (
                        <div
                            key={`sparkle-${i}`}
                            className={
                                styles[`sparkle-${i + 1}`]
                            }></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Index;
