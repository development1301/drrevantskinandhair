import BeforeAfterComponent from '@/components/sections/BeforeAfter';
import Footer from '@/components/sections/Footer';

export default function BeforeAfterPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '4rem auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <img src="/images/before_after_gallery.png" alt="Patient Transformations" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <BeforeAfterComponent />
      <Footer />
    </main>
  );
}
