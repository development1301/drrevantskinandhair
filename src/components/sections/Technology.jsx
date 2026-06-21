import styles from './Technology.module.css';

export default function Technology() {
  return (
    <section className={styles.techSection}>
      <div className={styles.content}>
        <h2 className="gold-text">Advanced Laboratory</h2>
        <p className={styles.desc}>
          Equipped with cutting-edge holographic diagnostics, microscopic analysis, and precision instrumentation to ensure the highest success rates in the industry.
        </p>
        <div className={styles.techGrid}>
          {['Micro-Precision FUE', 'Growth Factor Therapy', 'AI Scalp Analysis', 'Robotic Assistance'].map((item, i) => (
            <div key={i} className={`glass-panel ${styles.techItem}`}>
              <div className={styles.techIcon}></div>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
