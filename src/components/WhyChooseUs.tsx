import { motion } from 'motion/react';
import { Users, Clock, ShieldCheck, CheckCircle, FileText } from 'lucide-react';

const reasons = [
  {
    icon: <Users size={28} />,
    title: "Techniciens qualifiés",
    description: "Une équipe d'experts formés aux dernières technologies de l'industrie."
  },
  {
    icon: <Clock size={28} />,
    title: "Interventions rapides",
    description: "Disponibilité 24/7 pour les urgences et dépannages sur tout le territoire."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Maintenance fiable",
    description: "Des programmes d'entretien préventif pour minimiser les temps d'arrêt."
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Respect des normes",
    description: "Conformité stricte avec les normes de sécurité nationales et internationales."
  },
  {
    icon: <FileText size={28} />,
    title: "Suivi transparent",
    description: "Rapports détaillés et suivi administratif clair pour chaque intervention."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-liftia-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-liftia-blue/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-liftia-accent/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pourquoi Choisir LIFTIA
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
            className="text-gray-300 text-lg"
          >
            L'excellence opérationnelle et la satisfaction client au cœur de notre engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-liftia-blue/30 flex items-center justify-center text-liftia-accent mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
