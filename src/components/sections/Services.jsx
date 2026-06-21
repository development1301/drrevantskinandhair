"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  { 
    id: 1, 
    title: 'Advanced Hair Transplant', 
    desc: 'State-of-the-art FUE & FUT procedures delivering permanent, natural-looking results.',
    image: '/images/hair_transplant_macro.png',
    span: 'col-span-2 row-span-2'
  },
  { 
    id: 2, 
    title: 'PRP Therapy', 
    desc: 'Clinically proven platelet-rich plasma treatments to stimulate natural hair growth.',
    image: '/images/prp_preparation.png',
    span: 'col-span-1 row-span-1'
  },
  { 
    id: 3, 
    title: 'GFC Treatment', 
    desc: 'Next-generation Growth Factor Concentrate therapy for rapid follicle restoration.',
    image: '/images/gfc_extraction.png',
    span: 'col-span-1 row-span-1'
  },
  { 
    id: 4, 
    title: 'Acne & Scarring', 
    desc: 'Advanced dermatological solutions for clear, flawless skin.',
    image: '/images/acne_stages.png',
    span: 'col-span-2 row-span-1'
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className={styles.servicesSection}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          Signature <span className="gold-text">Treatments</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.subtitle}
        >
          Explore our world-class medical procedures designed for transformative results.
        </motion.p>
      </div>

      <motion.div style={{ y }} className={styles.bentoGrid}>
        {services.map((svc, index) => (
          <motion.div 
            key={svc.id} 
            className={`${styles.card} ${styles[svc.span]}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.imageWrapper}>
              <img src={svc.image} alt={svc.title} className={styles.cardImage} />
              <div className={styles.overlay}></div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.contentInner}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>
                <button className={styles.exploreBtn}>Explore Treatment</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
