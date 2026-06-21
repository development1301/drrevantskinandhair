import styles from './TreatmentTemplate.module.css';
import Appointment from '@/components/sections/Appointment';
import Footer from '@/components/sections/Footer';

export default function TreatmentTemplate({ treatment, type }) {
  // Pull rich content from data, fallback to placeholder if not yet generated
  const content = treatment.content || {
    overview: `The ${treatment.title} procedure represents the pinnacle of modern aesthetic technology, ensuring natural and permanent results.`,
    process: [
      'Comprehensive Consultation & Mapping',
      'Preparation of the target area',
      'Advanced Extraction/Application',
      'Post-procedure luxury care'
    ],
    benefits: [
      'Minimally invasive',
      'Fast recovery time',
      'Long-lasting natural appearance',
      'Boosted confidence'
    ]
  };

  // Map specific treatment IDs to their generated images, with a fallback
  const imageMap = {
    'prp': '/images/prp_preparation.png',
    'gfc': '/images/gfc_extraction.png',
    'acne': '/images/acne_stages.png',
  };
  
  const heroImage = imageMap[treatment.id] || (type === 'Hair' ? '/images/hair_transplant_macro.png' : '/images/acne_stages.png');

  return (
    <main className={styles.treatmentPage}>
      {/* Spacer for sticky navigation */}
      <div style={{ height: '100px' }}></div>
      
      <header className={styles.hero}>
        <h1 className="gold-text">{treatment.title}</h1>
        <p className={styles.subtitle}>{treatment.desc}</p>
        <div className={styles.tags}>
          <span className={styles.tag}>{type} Care</span>
          <span className={styles.tag}>Advanced Tech</span>
        </div>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto 5vw', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src={heroImage} alt={treatment.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={`glass-panel ${styles.mainCol}`}>
            <h2 className="gold-text">Overview</h2>
            <p>{content.overview}</p>
            
            <h3 className={styles.subHeading} style={{ marginTop: '2rem' }}>The Process</h3>
            <ul className={styles.list}>
              {content.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.sideCol}>
            <div className={`glass-panel ${styles.sideCard}`}>
              <h3 className="gold-text">Benefits</h3>
              <ul className={styles.list}>
                {content.benefits.map((ben, i) => (
                  <li key={i}>{ben}</li>
                ))}
              </ul>
            </div>
            
            <div className={`glass-panel ${styles.sideCard}`} style={{ marginTop: '2rem' }}>
              <h3 className="gold-text">Recovery</h3>
              <p>Minimal downtime. Most patients return to normal activities within 48 hours.</p>
            </div>

            <div className={`glass-panel ${styles.sideCard}`} style={{ marginTop: '2rem', padding: '1.5rem' }}>
              <img src="/images/tech_lab.png" alt="Advanced Clinical Technology" style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
              <h3 className="gold-text">Clinical Technology</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>We utilize FDA-approved medical-grade equipment to ensure maximum safety and superior clinical outcomes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.interactiveArea}>
        <h2 className="gold-text" style={{ textAlign: 'center' }}>Interactive 3D Simulation</h2>
        <p style={{ textAlign: 'center', opacity: 0.7 }}>Scroll to explore the microscopic impact of {treatment.title}.</p>
        <div style={{ height: '60vh' }}></div>
      </div>

      <Appointment />
      <Footer />
    </main>
  );
}
