"use client";
import { motion } from 'framer-motion';
import styles from './InfiniteMarquee.module.css';

const words = [
  "Hair Transplant", "•",
  "PRP Therapy", "•",
  "GFC Treatment", "•",
  "Acne Solutions", "•",
  "Anti-Aging", "•",
  "Pigmentation", "•",
  "Laser Therapy", "•",
  "Luxury Dermatology", "•"
];

export default function InfiniteMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <motion.div 
          className={styles.marqueeContent}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* We render the words twice to create a seamless infinite loop */}
          <div className={styles.wordSet}>
            {words.map((word, index) => (
              <span key={`set1-${index}`} className={word === "•" ? styles.dot : styles.word}>
                {word}
              </span>
            ))}
          </div>
          <div className={styles.wordSet}>
            {words.map((word, index) => (
              <span key={`set2-${index}`} className={word === "•" ? styles.dot : styles.word}>
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
