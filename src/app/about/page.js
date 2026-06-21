import AboutComponent from '@/components/sections/About';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <h1 className="gold-text" style={{ textAlign: 'center', fontSize: '4rem', marginTop: '4rem' }}>The Visionary Behind the Science</h1>
      
      <div style={{ maxWidth: '800px', margin: '3rem auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/about_portrait.png" alt="Dr. Revanth Portrait" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <AboutComponent />
      
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '5vw' }}>
        <h2 className="gold-text">Qualifications & Expertise</h2>
        <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
          <p>Dr. Revanth holds multiple international certifications in advanced aesthetic dermatology and robotic hair transplantation. With a commitment to ethical care and natural results, the clinic has become a global destination for patients seeking perfection.</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
