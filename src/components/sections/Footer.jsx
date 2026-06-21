import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Dr. Revanth
          </h2>
          <p style={{ opacity: 0.7, maxWidth: '300px', lineHeight: 1.6 }}>
            Experience world-class dermatological care, advanced hair transplants, and aesthetic skin treatments. Where Science Restores Confidence.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <h4>Treatments</h4>
            <p>Hair Transplant</p>
            <p>PRP Therapy</p>
            <p>Skin Rejuvenation</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>contact@drrevanthclinic.com</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Dr. Revanth Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
