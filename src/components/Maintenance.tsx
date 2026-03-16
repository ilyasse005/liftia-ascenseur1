import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Visites régulières et préventives",
  "Dépannage rapide 24h/24 et 7j/7",
  "Sécurité optimale des installations",
  "Conformité réglementaire garantie",
  "Rapports techniques détaillés",
  "Pièces de rechange d'origine"
];

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                alt="Maintenance technique d'ascenseur" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-liftia-blue/20 mix-blend-multiply" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-liftia-accent/10 rounded-full flex items-center justify-center text-liftia-accent font-bold text-xl">
                    24/7
                  </div>
                  <div>
                    <h4 className="font-bold text-liftia-dark">Assistance</h4>
                    <p className="text-sm text-gray-500">Intervention rapide</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-liftia-dark mb-4">
              Contrats de Maintenance
            </h2>
            <div className="h-1 w-20 bg-liftia-accent mb-6" />
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              La fiabilité de vos équipements est notre priorité. Nos contrats de maintenance sur mesure s'adaptent aux spécificités de vos installations pour garantir leur fonctionnement optimal et la sécurité des usagers.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2 className="text-liftia-accent flex-shrink-0" size={24} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-liftia-dark hover:bg-liftia-blue text-white px-8 py-4 rounded-md font-semibold transition-colors duration-300 shadow-lg"
            >
              Demander une évaluation gratuite
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
