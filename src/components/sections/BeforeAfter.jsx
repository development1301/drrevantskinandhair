"use client";
import Link from 'next/link';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter() {
  return (
    <section className={styles.beforeAfterSection}>
      <h2 className={`gold-text ${styles.title}`}>Transformations</h2>
      <p className={styles.subtitle}>Witness the results of precision and science.</p>
      
      <div className={styles.gridContainer}>
        {[
          { id: 'A', title: 'Case Study A', desc: 'FUE Transplant - 2500 Grafts', after: '1 Year' },
          { id: 'B', title: 'Case Study B', desc: 'PRP Therapy - 6 Sessions', after: '6 Months' },
          { id: 'C', title: 'Case Study C', desc: 'GFC Treatment - 4 Sessions', after: '4 Months' },
          { id: 'D', title: 'Case Study D', desc: 'Advanced Acne Scarring', after: '8 Months' }
        ].map((study) => (
          <Link key={study.id} href="/before-after" className={`${styles.card} glass-panel`} style={{ textDecoration: 'none' }}>
            <h3 className={styles.cardTitle}>{study.title}</h3>
            <p className={styles.cardDesc}>{study.desc}</p>
            <div className={styles.cardImages}>
              <div className={styles.imagePlaceholder}>Before</div>
              <div className={styles.imagePlaceholder}>After</div>
            </div>
            <p className={styles.clickHint}>Click to View Full Gallery</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
