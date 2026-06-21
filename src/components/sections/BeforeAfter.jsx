"use client";
import { useState } from 'react';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.beforeAfterSection}>
      <h2 className={`gold-text ${styles.title}`}>Transformations</h2>
      <p className={styles.subtitle}>Witness the results of precision and science.</p>
      
      {!expanded ? (
        <div className={styles.gridContainer}>
          {[
            { id: 'A', title: 'Case Study A', desc: 'FUE Transplant - 2500 Grafts', after: '1 Year' },
            { id: 'B', title: 'Case Study B', desc: 'PRP Therapy - 6 Sessions', after: '6 Months' },
            { id: 'C', title: 'Case Study C', desc: 'GFC Treatment - 4 Sessions', after: '4 Months' },
            { id: 'D', title: 'Case Study D', desc: 'Advanced Acne Scarring', after: '8 Months' }
          ].map((study) => (
            <div key={study.id} className={`${styles.card} glass-panel`} onClick={() => setExpanded(true)}>
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDesc}>{study.desc}</p>
              <div className={styles.cardImages}>
                <div className={styles.imagePlaceholder}>Before</div>
                <div className={styles.imagePlaceholder}>After</div>
              </div>
              <p className={styles.clickHint}>Click to Expand</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.immersiveGallery}>
          <button className={styles.closeBtn} onClick={() => setExpanded(false)}>Close Gallery</button>
          <div className={styles.galleryContent}>
            {/* Expanded view mock */}
            <div className={styles.galleryImagePlaceholder}>High Resolution View</div>
            <div className={styles.galleryInfo}>
              <h2 className="gold-text">Detailed Case Analysis</h2>
              <p>Zoomed in view highlighting natural hairline design and density achieved.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
