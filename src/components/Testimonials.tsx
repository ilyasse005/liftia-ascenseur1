import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Hassan B.",
    role: "Syndic d'immeuble, Casablanca",
    content: "L'équipe LIFTIA a modernisé nos deux ascenseurs avec un professionnalisme remarquable. Les résidents sont ravis du nouveau design et du silence de fonctionnement. Le suivi est impeccable.",
    rating: 5
  },
  {
    name: "Karim T.",
    role: "Directeur Technique, Hôtel 4*",
    content: "Nous avons confié la maintenance de nos équipements à LIFTIA. Leur réactivité en cas de panne est exceptionnelle. Un partenaire de confiance pour notre établissement.",
    rating: 5
  },
  {
    name: "Amina M.",
    role: "Gérante de centre d'affaires",
    content: "L'installation de nos nouveaux ascenseurs commerciaux s'est déroulée dans les délais prévus, sans perturber l'activité de nos locataires. Une expertise technique indéniable.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-liftia-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-liftia-dark mb-4"
          >
            Ils Nous Font Confiance
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-liftia-accent mx-auto mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-liftia-dark">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
