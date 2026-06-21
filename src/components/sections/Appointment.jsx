import styles from './Appointment.module.css';

export default function Appointment() {
  return (
    <section className={styles.appointmentSection}>
      <div className={`glass-panel ${styles.appointmentCard}`}>
        <h2 className={`gold-text ${styles.title}`}>Begin Your Transformation</h2>
        <p className={styles.subtitle}>Book a private consultation with our experts.</p>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="email" placeholder="Your Email" className={styles.input} />
          <button className={styles.submitBtn}>
            <span>Book Consultation</span>
            <div className={styles.glow}></div>
          </button>
        </form>
      </div>
    </section>
  );
}
