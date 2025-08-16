"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Portfolio</div>
            <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
        </nav>
    );

}

