import Footer from '@/components/sections/Footer';

export default function FAQPage() {
  const faqs = [
    { q: 'What is the recovery time for a Hair Transplant?', a: 'Most patients return to normal activities within 3 to 5 days. Full cosmetic recovery usually takes about 10-14 days.' },
    { q: 'Are the results permanent?', a: 'Yes. The transplanted hair follicles are genetically resistant to DHT, the hormone responsible for male pattern baldness.' },
    { q: 'Is the procedure painful?', a: 'We use advanced local anesthesia techniques. Most patients report feeling entirely comfortable and often watch a movie or sleep during the procedure.' },
    { q: 'When will I see the final results?', a: 'Initial growth begins around month 3-4, with significant density by month 6. Full results are typically visible at 12-14 months.' }
  ];

  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10, minHeight: '100vh' }}>
      <header style={{ padding: '10vw 5vw 5vw', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="gold-text" style={{ fontSize: '4rem' }}>Frequently Asked Questions</h1>
      </header>
      
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 5vw 10vw' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>{faq.q}</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
