import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const reasons = [
    { title: 'Expert Team', desc: 'World-renowned dermatologists and surgeons.' },
    { title: 'Advanced Technology', desc: 'State-of-the-art robotic and microscopic systems.' },
    { title: 'Natural Results', desc: 'Undetectable, dense, and permanent outcomes.' },
    { title: 'Modern Facilities', desc: 'Luxury, highly sterilized clinical environment.' },
    { title: 'Ethical Care', desc: 'Transparent assessments without upselling.' },
    { title: 'Long-Term Support', desc: 'Comprehensive post-procedure tracking.' }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.header}>
        <h2 className="gold-text">Why Choose Us</h2>
        <p>The standard of excellence in global aesthetic medicine.</p>
      </div>
      
      <div className={styles.grid}>
        {reasons.map((item, i) => (
          <div key={i} className={`glass-panel ${styles.card}`}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
