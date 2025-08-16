"use client";

import Head from 'next/head';
import ProjectCard from './components/ProjectCard';
import styles from './styles/Projects.module.css';

export default function Projects() {
    const projects = [
        {
            title: 'Project 1: Jewelry E-Commerce Website',
            description: 'A web-based e-commerce platform for selling jewelry, developed as part of the Web Programming course. This project includes product listings, a shopping cart, and basic payment integration.',
            github: 'https://github.com/Tiuman132/TiuTiushop',
        },
        {
            title: 'Project 2: Group Portfolio',
            description: 'A group portfolio website showcasing the profiles and details of our team members, built using Next.js. This project highlights our collaborative skills and individual contributions.',
            github: 'https://github.com/yourusername/group-portfolio',
        },
        {
            title: 'Project 3: TBD',
            description: 'This project is currently under development. Details will be updated soon.',
            github: '',
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Our Group Portfolio - Projects</title>
            </Head>
            <main className={styles.main}>
                <h1>Our Projects</h1>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                        />
                    ))}
                </div>
            </main>
        </div>
    );

}


