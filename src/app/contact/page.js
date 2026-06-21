import Appointment from '@/components/sections/Appointment';
import Footer from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <header style={{ padding: '5vw', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="gold-text" style={{ fontSize: '4rem' }}>Visit Our Clinic</h1>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto 5vw', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/clinic_exterior.png" alt="Dr. Revanth Clinic Exterior" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <Appointment />
      <Footer />
    </main>
  );
}
