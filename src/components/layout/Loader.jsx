"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the intricate assembly animation
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 1000); // Wait for fade out
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          <div className={styles.content}>
            <motion.div 
              className={styles.shieldOutline}
              initial={{ scale: 1.5, filter: 'blur(30px) brightness(2)', opacity: 0 }}
              animate={{ scale: 1, filter: 'blur(0px) brightness(1)', opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <img src="/logo.png" alt="Loading..." style={{ width: '100%', height: 'auto', dropShadow: '0 0 20px rgba(212, 162, 76, 0.5)' }} />
            </motion.div>
            
            <motion.h1 
              className={`gold-text ${styles.tagline}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Where Science Restores Confidence.
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
