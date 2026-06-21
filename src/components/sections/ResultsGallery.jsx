"use client";
import { useState } from 'react';
import styles from './ResultsGallery.module.css';

const studies = [
  { 
    id: 1, 
    category: 'Hair Transplant',
    age: 32,
    treatment: 'FUE Hair Transplant',
    concern: 'Norwood 5 Hair Loss',
    timeline: '12 Months',
    grafts: '3500',
    image: '/images/before_after_gallery.png' 
  },
  { 
    id: 2, 
    category: 'PRP',
    age: 28,
    treatment: 'PRP + GFC',
    concern: 'Diffuse Thinning',
    timeline: '6 Months',
    image: '/images/before_after_gallery.png' 
  },
  { 
    id: 3, 
    category: 'Beard',
    age: 35,
    treatment: 'Beard Transplant',
    concern: 'Patchy Growth',
    timeline: '10 Months',
    image: '/images/before_after_gallery.png' 
  },
  { 
    id: 4, 
    category: 'Acne',
    age: 26,
    treatment: 'Acne Scar Treatment',
    concern: 'Atrophic Scars',
    timeline: '5 Sessions',
    image: '/images/before_after_gallery.png' 
  },
  { 
    id: 5, 
    category: 'Pigmentation',
    age: 31,
    treatment: 'Pigmentation Treatment',
    concern: 'Melasma',
    timeline: '4 Months',
    image: '/images/before_after_gallery.png' 
  }
];

const categories = ['All', 'Hair Transplant', 'PRP', 'Beard', 'Acne', 'Pigmentation'];

function ResultCard({ study }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={`${styles.card} glass-panel`}>
      <div className={styles.sliderContainer}>
        {/* AFTER IMAGE (Bottom Layer) */}
        <div className={styles.imageAfter}>
          <img src={study.image} alt="After" loading="lazy" />
          <span className={styles.labelAfter}>After</span>
        </div>
        
        {/* BEFORE IMAGE (Top Layer, Clipped) */}
        <div 
          className={styles.imageBefore} 
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={study.image} alt="Before" loading="lazy" style={{ filter: 'grayscale(0.8) sepia(0.3) blur(1px)' }} />
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
          onChange={(e) => setSliderPosition(e.target.value)}
          className={styles.sliderInput} 
          aria-label="Compare before and after images"
        />
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.infoRow}><span>Age</span> <strong>{study.age}</strong></div>
        <div className={styles.infoRow}><span>Treatment</span> <strong>{study.treatment}</strong></div>
        {study.concern && <div className={styles.infoRow}><span>Concern</span> <strong>{study.concern}</strong></div>}
        <div className={styles.infoRow}><span>Timeline</span> <strong>{study.timeline}</strong></div>
        {study.grafts && <div className={styles.infoRow}><span>Grafts</span> <strong>{study.grafts}</strong></div>}
      </div>
    </div>
  );
}

export default function ResultsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = studies.filter(study => 
    activeFilter === 'All' ? true : study.category === activeFilter
  );

  return (
    <section className={styles.gallerySection}>
      <h2 className={`gold-text ${styles.title}`}>Before & After Results</h2>
      <p className={styles.subtitle}>Explore real patient transformations and treatment outcomes.</p>
      
      {/* CATEGORY FILTERS */}
      <div className={styles.filterContainer}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID OF CARDS */}
      <div className={styles.gridContainer}>
        {filteredStudies.map((study) => (
          <ResultCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
