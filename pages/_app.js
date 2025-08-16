"use client";

import '../../styles/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function App({ Component, pageProps }) {
  if (typeof Navbar !== 'function' || typeof Footer !== 'function') {
    console.error('Navbar or Footer is not a valid component:', { Navbar, Footer });
    return <div>Error loading components</div>;
  }
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
