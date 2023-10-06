import React from 'react';
import styles from './styles.module.scss';
import MyProgress from '../MyProgress';

export default function Index({ size, progress, skills }) {
    // Déstructure les compétences pour éviter de les répéter
    const [skill1, skill2, skill3] = skills || [];
    return (
        <div className={styles.container}>
            {progress && <MyProgress width={200} />}
            <div
                className={`${styles.circle} ${
                    size === 'small' ? styles.small : ''
                }`}>
                <div className={styles.dot}></div>
                {/* Premier élément */}
                {skill1 && (
                  <div className={styles.before} style={{ '--skill-text': `"${skills[0].name}"` }}>
                        <div
                            className={`${styles.item} ${styles.item__one}`}>
                            <img
                                src={skill1.image}
                                alt=''
                                className={
                                    styles.item__image
                                }
                            />
                        </div>
                    </div>
                )}

                {/* Deuxième élément */}
                {skill2 && (
                  <div className={styles.before} style={{ '--skill-text': `"${skills[1].name}"` }}>
                  <div
                            className={`${styles.item} ${
                                styles.item__two
                            } ${
                                !skill3
                                    ? styles.item__last
                                    : ''
                            }`}>
                            <img
                                src={skill2.image}
                                alt=''
                                className={
                                    styles.item__image
                                }
                            />
                        </div>
                    </div>
                )}

                {/* Troisième élément (si disponible) */}
                {skill3 && (
                  <div className={styles.before} style={{ '--skill-text': `"${skills[2].name}"` }}>
                  <div
                            className={`${styles.item} ${styles.item__three} ${styles.bottom}`}>
                            <img
                                src={skill3.image}
                                alt=''
                                className={
                                    styles.item__image
                                }
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
