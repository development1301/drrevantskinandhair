import styles from './Testimonials.module.css';

export default function Testimonials() {
  const reviews = [
    { name: 'James T.', procedure: 'Hair Transplant', text: 'Incredible results. The technology used here is unparalleled.' },
    { name: 'Sarah L.', procedure: 'PRP Therapy', text: 'My hair density has visibly improved within months. Highly recommended.' },
    { name: 'Michael B.', procedure: 'Skin Rejuvenation', text: 'A truly luxury experience with doctors who care about perfection.' }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2 className="gold-text" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}>Patient Stories</h2>
      <div className={styles.spheresContainer}>
        {reviews.map((rev, i) => (
          <div key={i} className={styles.sphereWrapper}>
            <div className={`glass-panel ${styles.sphere}`}>
              <h4>{rev.name}</h4>
              <span className={styles.procedure}>{rev.procedure}</span>
              <p className={styles.reviewText}>"{rev.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
