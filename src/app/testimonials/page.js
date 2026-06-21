import TestimonialsComponent from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function TestimonialsPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <header style={{ padding: '5vw', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="gold-text" style={{ fontSize: '4rem' }}>Life-Changing Transformations</h1>
      </header>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 5vw', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/testimonial_portrait.png" alt="Patient Success Story" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <TestimonialsComponent />
      <Footer />
    </main>
  );
}
