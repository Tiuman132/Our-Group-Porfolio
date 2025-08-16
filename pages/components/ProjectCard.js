"use client";

import { useState } from 'react';
import styles from './styles/ProjectCard.module.css';

export default function ProjectCard({ title, description, github }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{title}</h3>
            <p className={`${styles.description} ${isHovered ? styles.visible : ''}`}>
                {description}
            </p>
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    View on GitHub
                </a>
            )}
        </div>
    );

}
