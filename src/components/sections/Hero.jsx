"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      {/* Background with Gradient & Particles */}
      <div className={styles.background}>
        <div className={styles.gradientOverlay}></div>
        {/* We can rely on the global 3D particles, but add CSS animated dust here for extra density */}
        <div className={styles.dustParticles}></div>
      </div>

      <div className={styles.splitLayout}>
        
        {/* LEFT SIDE: 45% Content & Trust */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
        >
          {/* Trimmed Trust Badges */}
          <div className={styles.trustIndicators}>
            <div className={styles.badge}>⭐⭐⭐⭐⭐ 4.9 Rating</div>
            <div className={styles.badge}>🏆 10,000+ Patients</div>
            <div className={styles.badge}>✅ 95% Satisfaction</div>
          </div>

          <div className={styles.textWrap} style={{ margin: '1rem 0' }}>
            <h1 className={styles.headline}>
              Advanced Hair Restoration &<br/>
              <span className="gold-text">Luxury Dermatology</span>
            </h1>
            <p className={styles.subheadline} style={{ marginTop: '1rem' }}>
              Experience world-class hair transplants and personalized aesthetic treatments using advanced medical technology.
            </p>
          </div>

          {/* Simplified CTA Group */}
          <div className={styles.ctaGroup}>
            <button className={`${styles.btn} ${styles.primaryBtn}`}>Book Consultation</button>
            <button className={`${styles.btn} ${styles.whatsappBtn}`}>WhatsApp Us</button>
          </div>

        </motion.div>

        {/* RIGHT SIDE: 55% Visual Experience */}
        <motion.div 
          className={styles.rightVisuals}
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img src="/images/hero_consultation.png" alt="Luxury Consultation" className={styles.mainImage} />
            <div className={styles.imageOverlay}></div>
          </div>

          {/* Floating UI Cards - Optimized for CSS hardware acceleration */}
          <div className={`${styles.floatingCard} ${styles.card1} ${styles.floatAnim1}`}>
            <h4>Hair Transplant</h4>
            <p>5000+ Successful Procedures</p>
          </div>

          <div className={`${styles.floatingCard} ${styles.card2} ${styles.floatAnim2}`}>
            <h4>PRP Therapy</h4>
            <p>Clinically Proven Hair Regrowth</p>
          </div>

          <div className={`${styles.floatingCard} ${styles.card3} ${styles.floatAnim3}`}>
            <h4>Advanced Dermatology</h4>
            <p>Personalized Skin Solutions</p>
          </div>

          <div className={`${styles.floatingCard} ${styles.card4} ${styles.floatAnim4}`}>
            <h4>GFC Treatment</h4>
            <p>Growth Factor Concentrate</p>
          </div>

          <div className={`${styles.floatingCard} ${styles.card5} ${styles.floatAnim5}`}>
            <h4>Laser Therapy</h4>
            <p>Advanced Pigmentation Control</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
