"use client";
import { motion } from 'framer-motion';
import styles from './Statistics.module.css';

export default function Statistics() {
  return (
    <section className={styles.dashboardSection}>
      <div className={styles.bentoDashboard}>
        
        {/* Large Metric: 10,000+ Patients */}
        <motion.div 
          className={`${styles.widget} ${styles.widgetLarge}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.widgetHeader}>Global Reach</div>
          <div className={styles.widgetValue}>10,000+</div>
          <div className={styles.widgetLabel}>Patients Treated Worldwide</div>
          
          {/* Subtle Data Visualization */}
          <div className={styles.wireframeGraph}>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,0" fill="none" stroke="rgba(212, 162, 76, 0.3)" strokeWidth="1" />
              <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,0 L100,30 L0,30 Z" fill="rgba(212, 162, 76, 0.05)" />
            </svg>
          </div>
        </motion.div>

        {/* Medium Metric: 95% Success */}
        <motion.div 
          className={styles.widget}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.widgetHeader}>Patient Satisfaction</div>
          <div className={styles.widgetValue}>95%</div>
          <div className={styles.widgetLabel}>Average Success Rate</div>
        </motion.div>

        {/* Medium Metric: 15+ Years */}
        <motion.div 
          className={styles.widget}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.widgetHeader}>Clinical Expertise</div>
          <div className={styles.widgetValue}>15+</div>
          <div className={styles.widgetLabel}>Years of Experience</div>
        </motion.div>

        {/* Small Metric: Availability */}
        <motion.div 
          className={styles.widget}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.widgetHeader}>Consultations</div>
          <div className={styles.widgetValue} style={{ fontSize: '1.8rem', color: '#25D366' }}>Available This Week</div>
        </motion.div>

        {/* Small Metric: Procedures */}
        <motion.div 
          className={styles.widget}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.widgetHeader}>Hair Transplants</div>
          <div className={styles.widgetValue}>5000+</div>
          <div className={styles.widgetLabel}>Successful Procedures</div>
        </motion.div>

      </div>
    </section>
  );
}
