"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './SignatureMoment.module.css';

export default function SignatureMoment() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate distinct phases based on the 400vh scroll depth
  // Phase 1 (0-0.2): Follicle appears
  // Phase 2 (0.2-0.4): DNA emerges
  // Phase 3 (0.4-0.6): Skin cells form & Hair grows
  // Phase 4 (0.6-0.8): Gold particles activate & Logo forms
  // Phase 5 (0.8-1.0): Text slam
  
  // Phase 1 (0.0 - 0.35): Science.
  const text1Opacity = useTransform(scrollYProgress, [0.0, 0.1, 0.3, 0.35], [0, 1, 1, 0]);
  
  // Phase 2 (0.35 - 0.65): Precision.
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  
  // Phase 3 (0.65 - 1.0): Confidence Restored.
  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.95, 1], [0, 1, 1, 0]);
  
  const text1Scale = useTransform(scrollYProgress, [0.0, 0.35], [0.8, 1.1]);
  const text2Scale = useTransform(scrollYProgress, [0.35, 0.65], [0.8, 1.1]);
  const text3Scale = useTransform(scrollYProgress, [0.65, 1], [0.8, 1.1]);

  return (
    <section id="signature-sequence" ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrap}>
        
        {/* The 3D Canvas handles the visuals behind this, so we just manage the overlay text here */}
        
        <div className={styles.textContainer} style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.h1 
            className={`gold-text ${styles.massiveText}`} 
            style={{ opacity: text1Opacity, scale: text1Scale, position: 'absolute' }}
          >
            Science.
          </motion.h1>
          <motion.h1 
            className={`gold-text ${styles.massiveText}`} 
            style={{ opacity: text2Opacity, scale: text2Scale, position: 'absolute' }}
          >
            Precision.
          </motion.h1>
          <motion.h1 
            className={`gold-text ${styles.massiveText}`} 
            style={{ opacity: text3Opacity, scale: text3Scale, position: 'absolute' }}
          >
            Confidence Restored.
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
