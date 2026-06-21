import ResultsGallery from '@/components/sections/ResultsGallery';
import Footer from '@/components/sections/Footer';

export default function BeforeAfterPage() {
  return (
    <main style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
      <ResultsGallery />
      <Footer />
    </main>
  );
}
