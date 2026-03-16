import { motion } from 'motion/react';
import { Settings, Wrench, RefreshCw, ClipboardCheck, ShieldCheck, ArrowUpDown } from 'lucide-react';

const services = [
  {
    title: "Installation d’ascenseurs",
    description: "Solutions sur mesure pour immeubles neufs ou existants, alliant design et technologie de pointe.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Maintenance et dépannage",
    description: "Intervention rapide et entretien préventif pour garantir la longévité de vos installations.",
    icon: <Wrench size={32} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Modernisation d’ascenseurs",
    description: "Mise aux normes et rénovation esthétique et technique de vos anciens équipements.",
    icon: <RefreshCw size={32} />,
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Audit et diagnostic technique",
    description: "Expertise complète de vos installations pour évaluer leur état et leur sécurité.",
    icon: <ClipboardCheck size={32} />,
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Contrôle réglementaire",
    description: "Vérification rigoureuse pour assurer la conformité avec les normes de sécurité en vigueur.",
    icon: <ShieldCheck size={32} />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Escaliers mécaniques",
    description: "Installation et maintenance de portes automatiques et escaliers mécaniques pour espaces commerciaux.",
    icon: <ArrowUpDown size={32} />,
    image: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-liftia-dark mb-4"
          >
            Nos Services d'Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-liftia-accent mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Des solutions complètes pour la mobilité verticale, de l'installation à la maintenance, assurées par des professionnels qualifiés.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-liftia-dark/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 w-16 h-16 bg-liftia-blue text-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 z-20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-liftia-dark mb-3 mt-2 group-hover:text-liftia-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
