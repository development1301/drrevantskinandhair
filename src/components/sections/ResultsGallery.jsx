"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './ResultsGallery.module.css';

const studies = [
  { id: 'A', title: 'Case Study 01', desc: 'FUE Transplant - 2500 Grafts', after: '1 Year', image: '/images/before_after_gallery.png' },
  { id: 'B', title: 'Case Study 02', desc: 'PRP Therapy - 6 Sessions', after: '6 Months', image: '/images/before_after_gallery.png' },
  { id: 'C', title: 'Case Study 03', desc: 'GFC Treatment - 4 Sessions', after: '4 Months', image: '/images/before_after_gallery.png' },
  { id: 'D', title: 'Case Study 04', desc: 'Advanced Hair Restoration', after: '8 Months', image: '/images/before_after_gallery.png' }
];

export default function ResultsGallery() {
  const [activeStudy, setActiveStudy] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const expandedRef = useRef(null);

  const handleExpand = (study) => {
    setActiveStudy(study);
    setSliderPosition(50);
  };

  const handleClose = () => {
    setActiveStudy(null);
  };

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  // Scroll to the expanded section when it opens
  useEffect(() => {
    if (activeStudy && expandedRef.current) {
      setTimeout(() => {
        expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeStudy]);

  return (
    <section className={styles.gallerySection}>
      <h2 className={`gold-text ${styles.title}`}>Hair Restoration Gallery</h2>
      <p className={styles.subtitle}>Witness the results of precision and science.</p>
      
      {/* GRID OF CARDS */}
      <div className={styles.gridContainer}>
        {studies.map((study) => (
          <div 
            key={study.id} 
            className={`${styles.card} glass-panel`}
            onClick={() => handleExpand(study)}
          >
            <h3 className={styles.cardTitle}>{study.title}</h3>
            <p className={styles.cardDesc}>{study.desc}</p>
            <div className={styles.cardImages}>
              <div className={styles.imagePlaceholder}>Before</div>
              <div className={styles.imagePlaceholder}>After</div>
            </div>
            <div className={styles.clickHint}>
              {activeStudy?.id === study.id ? 'Currently Viewing ↓' : 'Expand'}
            </div>
          </div>
        ))}
      </div>

      {/* EXPANDED VIEW AT THE BOTTOM */}
      {activeStudy && (
        <div className={styles.expandedSection} ref={expandedRef}>
          <div className={styles.expandedHeader}>
            <h2 className={`gold-text ${styles.expandedTitle}`}>
              High-resolution view
              <span className={styles.expandedSubtitle}>{activeStudy.title}: {activeStudy.desc}</span>
            </h2>
            <button className={styles.closeBtn} onClick={handleClose}>
              Close view
            </button>
          </div>

          <div className={styles.sliderContainer}>
            {/* AFTER IMAGE (Bottom Layer) */}
            <div className={styles.imageAfter}>
              <img src={activeStudy.image} alt="After Transformation" />
              <span className={styles.labelAfter}>After</span>
            </div>
            
            {/* BEFORE IMAGE (Top Layer, Clipped) */}
            <div 
              className={styles.imageBefore} 
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img src={activeStudy.image} alt="Before Transformation" style={{ filter: 'grayscale(0.8) sepia(0.3) blur(1px)' }} />
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
        </div>
      )}
    </section>
  );
}
