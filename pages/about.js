"use client";

import Head from 'next/head';
import styles from './styles/About.module.css';

export default function About() {
    const members = [
        { name: "Thi Tieu Man Tran", email: "tieuman132@gmail.com" },
        { name: "Kaushalya Satharasinghe", email: "kaushalya11@gmail.com" },
        { name: "Zixin Li", email: "lixinzi@gmail.com" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        alert(`Thank you! Your question "${question}" has been received. We will get back to you soon!`);
        e.target.reset();
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Our Group Portfolio - About</title>
            </Head>
            <main className={styles.main}>
                <h1>About Our Group</h1>
                <p>
                    We are Group 3, a team of 3 members working on the final project for the
                    Advanced Front-End Programming course. Learn more about us and get in touch!
                </p>
                <section className={styles.contactSection}>
                    <h2>Team Members</h2>
                    <ul className={styles.memberList}>
                        {members.map((member, index) => (
                            <li key={index} className={styles.memberItem}>
                                <span>{member.name}</span>
                                <a href={`mailto:${member.email}`} className={styles.emailLink}>
                                    {member.email}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className={styles.qaSection}>
                    <h2>Q&A Section</h2>
                    <form onSubmit={handleSubmit} className={styles.qaForm}>
                        <label htmlFor="question">Enter your question:</label>
                        <textarea id="question" name="question" rows="4" placeholder="Type your question here..." className={styles.textarea}></textarea>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </section>
            </main>
        </div>
    );

}


