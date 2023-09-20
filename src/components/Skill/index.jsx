import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import MyProgress from '../MyProgress';

export default function Index({
    size,
    progress,
    fs,
    skills,
}) {
    return (
        <>
            <div className={styles.container}>
                {progress && <MyProgress width={size} />}
                <div
                    className={styles.circle}
                    style={{
                        width: size ? `${size}px` : '300px',
                    }}
                >
                    <div
                        style={{
                            width: size
                                ? `${size / 2}px`
                                : '100px',
                            height: size
                                ? `${size / 2}px`
                                : '100px',
                        }}
                        className={`${styles.item} ${styles.left} `}
                    >
                        <div>
                            <h3
                                className={`${styles.item__title} ${fs}`}
                            >
                                {skills && skills[0].name}
                            </h3>
                        </div>
                        <div
                            className={styles.item__circle}
                            style={{
                                width: size
                                    ? `${size / 4}px`
                                    : '100px',
                            }}
                        >
                            <img
                                src={
                                    skills &&
                                    skills[0].image
                                }
                                alt=''
                                className={
                                    styles.item__image
                                }
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            width: size
                                ? `${size / 2}px`
                                : '100px',
                            height: size
                                ? `${size / 2}px`
                                : '100px',
                        }}
                        className={`${styles.item}  ${
                            styles.right
                        } ${
                            skills &&
                            skills[2] &&
                            styles.onlyTwo
                        }`}
                    >
                        <h3
                            className={`${styles.item__title} ${fs}`}
                        >
                            {skills && skills[1].name}
                        </h3>
                        <div
                            className={styles.item__circle}
                            style={{
                                width: size
                                    ? `${size / 4}px`
                                    : '100px',
                            }}
                        >
                            <img
                                src={
                                    skills &&
                                    skills[1].image
                                }
                                alt=''
                                className={
                                    styles.item__image
                                }
                            />
                        </div>
                    </div>
                    {skills && skills[2] && (
                        <div
                            style={{
                                width: size
                                    ? `${size / 2}px`
                                    : '100px',
                                height: size
                                    ? `${size / 2}px`
                                    : '100px',
                            }}
                            className={`${styles.item} ${styles.bottom} `}
                        >
                            <h3
                                className={`${styles.item__title} ${fs}`}
                            >
                                {skills && skills[2].name}
                            </h3>
                            <div
                                className={
                                    styles.item__circle
                                }
                                style={{
                                    width: size
                                        ? `${size / 4}px`
                                        : '100px',
                                }}
                            >
                                <img
                                    src={
                                        skills &&
                                        skills[2].image
                                    }
                                    alt=''
                                    className={
                                        styles.item__image
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <div
                        className={styles.dot}
                        style={{ padding: size / 10 }}
                    ></div>
                </div>
            </div>
        </>
    );
}
