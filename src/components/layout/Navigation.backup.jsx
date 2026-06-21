import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Dr. Revanth Clinic" className={styles.logoImage} />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link href="/about">About</Link>
          
          <div className={styles.dropdown}>
            <span>Hair</span>
            <div className={styles.dropdownContent}>
              <Link href="/treatments/hair/hair-transplant">Hair Transplant</Link>
              <Link href="/treatments/hair/prp-therapy">PRP Therapy</Link>
              <Link href="/treatments/hair/gfc-treatment">GFC Treatment</Link>
            </div>
          </div>

          <div className={styles.dropdown}>
            <span>Skin</span>
            <div className={styles.dropdownContent}>
              <Link href="/treatments/skin/acne-treatment">Acne</Link>
              <Link href="/treatments/skin/anti-aging">Anti-Aging</Link>
              <Link href="/treatments/skin/botox">Botox & Fillers</Link>
            </div>
          </div>

          <Link href="/hair-transplant-experience">Experience</Link>
          <Link href="/before-after">Results</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.cta}
          >
            Book Consultation
          </motion.button>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
