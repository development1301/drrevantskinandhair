import Appointment from '@/components/sections/Appointment';
import Footer from '@/components/sections/Footer';

export default function HairTransplantExperiencePage() {
  return (
    <main style={{ position: 'relative', zIndex: 10, paddingTop: '100px' }}>
      <header style={{ padding: '5vw', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="gold-text" style={{ fontSize: '4rem' }}>The Hair Transplant Experience</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '1rem' }}>
          Discover the microscopic precision and artistry behind our world-class FUE procedures.
        </p>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto 5vw', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/hair_transplant_macro.png" alt="Follicle Macro Analysis" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <section className="glass-panel" style={{ margin: '5vw', padding: '4rem' }}>
        <h2 className="gold-text">AI Scalp Analysis & Hairline Design</h2>
        <p style={{ marginTop: '1rem' }}>Using proprietary algorithms, we design a hairline that perfectly matches your facial geometry.</p>
      </section>

      <Appointment />
      <Footer />
    </main>
  );
}
