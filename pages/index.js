"use client";

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const members = [
    { id: 1, name: "Thi Tieu Man Tran", image: "https://i.pinimg.com/736x/88/2a/1d/882a1dd324fb7a2b36c02dcbda16485f.jpg" },
    { id: 2, name: "Kaushalya Satharasinghe", image: "https://i.pinimg.com/originals/60/9f/39/609f392284fd9e5d787ee190ca1bbc40.jpg" },
    { id: 3, name: "Zixin Li", image: "https://i.pinimg.com/originals/25/df/77/25df77e633f8593026d1175b55adaa85.jpg" },
  ];

  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const handleClick = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Our Group Portfolio - Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Welcome to Our Group Portfolio</h1>
        <p>
          This is the website of Group 3, currently working on the final project for the
          Advanced Front-End Programming course. Our group consists of 3 members. Click
          the button below to view detailed information about each member!
        </p>
        <div className={styles.interactive}>
          <img src={members[currentMemberIndex].image} alt={members[currentMemberIndex].name} style={{ width: '300px', height: '300px' }} />
          <p>Name: {members[currentMemberIndex].name}</p>
          <button onClick={handleClick}>Click Here!</button>
        </div>
      </main>
    </div>
  );
}