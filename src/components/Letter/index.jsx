import React from 'react'; // Importation de React
import styles from './styles.module.scss'; // Importation du module de styles

const YourComponent = () => {
    return (
        <>
            <div className={styles['hero-container']}>
                <h2
                    className={`${styles.hero} ${styles.glitch} ${styles.layers}`}
                    data-text=''>
                    <span
                        className={`fs-1 ${styles.letter}`}>
                        Développeur Front-end
                    </span>
                </h2>
            </div>
        </>
    );
};

export default YourComponent;
