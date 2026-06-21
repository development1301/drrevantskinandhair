import TechnologyComponent from '@/components/sections/Technology';
import Footer from '@/components/sections/Footer';

export default function TechnologyPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/tech_lab.png" alt="Advanced Dermatology Lab" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <TechnologyComponent />
      <Footer />
    </main>
  );
}
