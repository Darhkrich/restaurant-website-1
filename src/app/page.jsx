import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Events from '@/components/Events';
import VisualBreak from '@/components/VisualBreak';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Events />
      <VisualBreak />   {/* keep the atmospheric break */}
      <Reservation />
      <Footer />
    </main>
  );
}