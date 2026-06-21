"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter() {
  const router = useRouter();
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className={styles.beforeAfterSection}>
      <h2 className={`gold-text ${styles.title}`}>Real Patient Transformations</h2>
      <p className={styles.subtitle}>
        Natural results achieved through advanced hair restoration and dermatology treatments.
      </p>
      
      <div className={styles.sliderContainer}>
        {/* AFTER IMAGE (Bottom Layer) */}
        <div className={styles.imageAfter}>
          <img src="/images/before_after_gallery.png" alt="After Transformation" />
          <span className={styles.labelAfter}>After</span>
        </div>
        
        {/* BEFORE IMAGE (Top Layer, Clipped) */}
        <div 
          className={styles.imageBefore} 
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src="/images/before_after_gallery.png" alt="Before Transformation" style={{ filter: 'grayscale(0.8) sepia(0.3) blur(1px)' }} />
          <span className={styles.labelBefore}>Before</span>
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div className={styles.sliderLine} style={{ left: `${sliderPosition}%` }}>
          <div className={styles.sliderThumb}>
            <div className={styles.thumbArrowLeft}></div>
            <div className={styles.thumbArrowRight}></div>
          </div>
        </div>

        {/* INVISIBLE RANGE INPUT */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={handleSliderChange}
          className={styles.sliderInput} 
          aria-label="Compare before and after images"
        />
      </div>

      <div className={styles.conciseInfo}>
        <p>Hair Transplant • 3500 Grafts • 12 Months Recovery</p>
      </div>

      <button 
        className={styles.seeMoreBtn} 
        onClick={() => router.push('/before-after')}
      >
        See More Transformations →
      </button>
    </section>
  );
}
