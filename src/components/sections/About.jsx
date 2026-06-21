"use client";
import { motion } from 'framer-motion';
import InfoChip from '@/components/ui/InfoChip';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.asymmetricalLayout}>
        
        {/* LEFT 40%: Content & Credentials */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>
            Mastery in <br />
            <span className="gold-text">Dermatology</span>
          </h2>
          
          <div className={styles.chipGrid}>
            <InfoChip text="✓ Board Certified" />
            <InfoChip text="✓ FDA Approved Tech" />
            <InfoChip text="✓ Minimal Downtime" />
            <InfoChip text="✓ Natural Results" />
          </div>

          <p className={styles.description}>
            Dr. Revanth leads a world-class team of specialists dedicated to permanent hair restoration and advanced aesthetic dermatology. Combining surgical precision with aesthetic artistry, the clinic delivers life-changing transformations.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div>
                <h4>Comprehensive Consultation</h4>
                <p>AI-driven scalp and skin analysis.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div>
                <h4>Precision Procedure</h4>
                <p>State-of-the-art medical technology.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div>
                <h4>Optimal Recovery</h4>
                <p>Personalized post-care regimens.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT 60%: Masonry Micro-Gallery */}
        <motion.div 
          className={styles.rightGallery}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Wireframe background element */}
          <div className={styles.wireframeGrid}></div>
          
          <div className={styles.masonryGrid}>
            <div className={`${styles.galleryItem} ${styles.tall}`}>
              <img src="/images/about_portrait.png" alt="Dr. Revanth" className={styles.img} />
            </div>
            <div className={`${styles.galleryItem} ${styles.wide}`}>
              <img src="/images/tech_lab.png" alt="Advanced Lab" className={styles.img} />
              <div className={styles.floatingBadge}>State-of-the-art Lab</div>
            </div>
            <div className={`${styles.galleryItem} ${styles.small}`}>
              <img src="/images/clinic_exterior.png" alt="Clinic Interior" className={styles.img} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
