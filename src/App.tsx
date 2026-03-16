/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Maintenance from './components/Maintenance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-liftia-light font-sans text-liftia-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <WhyChooseUs />
        <Maintenance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


