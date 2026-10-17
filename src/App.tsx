import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Process from '@/components/Process';
import Catalog from '@/components/Catalog';
import Accreditation from '@/components/Accreditation';
import Track from '@/components/Track';
import Routes from '@/components/Routes';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import type { Product } from '@/data';

export default function App() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cloud-100">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Process />
        <Catalog onOrder={(p) => setActive(p)} />
        <Accreditation />
        <Track />
        <Routes />
        <Journey />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <OrderModal product={active} onClose={() => setActive(null)} />
    </div>
  );
}
