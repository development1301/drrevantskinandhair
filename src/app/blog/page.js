import Footer from '@/components/sections/Footer';

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10, minHeight: '100vh' }}>
      <header style={{ padding: '10vw 5vw', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="gold-text" style={{ fontSize: '4rem' }}>Clinical Insights</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '1rem' }}>
          Latest research, advice, and updates from the forefront of dermatology and hair restoration.
        </p>
      </header>
      
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5vw 10vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.9rem', marginBottom: '1rem' }}>HAIR LOSS • 5 MIN READ</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Understanding the Science of Follicular Growth Cycles</h3>
              <p style={{ opacity: 0.7 }}>A deep dive into how modern FUE techniques map precisely to your natural hair growth phases...</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
