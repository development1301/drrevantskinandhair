import Hero from '@/components/sections/Hero';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import About from '@/components/sections/About';
import Statistics from '@/components/sections/Statistics';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Technology from '@/components/sections/Technology';
import Testimonials from '@/components/sections/Testimonials';
import Appointment from '@/components/sections/Appointment';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <InfiniteMarquee />
        <Statistics />
        <About />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Technology />
        <Testimonials />
        <Appointment />
        <Footer />
      </div>
    </main>
  );
}
