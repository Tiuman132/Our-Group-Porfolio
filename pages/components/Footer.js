"use client";

import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Our Group Portfolio. All rights reserved.</p>
            <div className={styles.socialLinks}>
                <a href="https://github.com/">GitHub</a>
                <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Gmail</a>
            </div>
        </footer>
    );
}