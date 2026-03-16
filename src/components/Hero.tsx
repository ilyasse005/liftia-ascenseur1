import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541888087405-325272640fb8?q=80&w=2070&auto=format&fit=crop",
    title: (
      <>
        Votre expert en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-liftia-accent">mobilité verticale</span> au Maroc
      </>
    ),
    subtitle: "Installation, maintenance et modernisation d’ascenseurs pour immeubles, hôtels et bâtiments professionnels."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    title: (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-liftia-accent">Design & Technologie</span> de Pointe
      </>
    ),
    subtitle: "Des ascenseurs résidentiels alliant esthétique moderne, luminosité et sécurité absolue."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title: (
      <>
        Ascenseurs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-liftia-accent">Résidentiels</span>
      </>
    ),
    subtitle: "Le confort et l'élégance d'un ascenseur privé, conçu sur mesure pour s'intégrer parfaitement à votre domicile."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-liftia-dark">
      {/* Background Images Slider */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt="LIFTIA Ascenseurs"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-liftia-dark/90 via-liftia-dark/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-liftia-accent/20 text-liftia-accent border border-liftia-accent/30 font-semibold tracking-wider text-sm mb-6 uppercase">
                LIFTIA SARL AU
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-liftia-accent hover:bg-blue-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              <span>Demander un devis</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+212600674748"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300"
            >
              <PhoneCall size={20} />
              <span>Contact rapide</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-4 md:right-10 z-20 flex gap-4">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-liftia-accent w-8' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
