import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: "Ascenseurs résidentiels",
    description: "Confort, silence et design élégant pour les immeubles d'habitation et villas privées.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Ascenseurs commerciaux",
    description: "Robustesse et rapidité pour les hôtels, centres commerciaux et immeubles de bureaux à fort trafic.",
    image: "https://images.unsplash.com/photo-1541888087405-325272640fb8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Monte-charges industriels",
    description: "Solutions de levage puissantes et résistantes pour le transport sécurisé de marchandises lourdes.",
    image: "https://images.unsplash.com/photo-1587293852726-69476477842c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Monte-voitures",
    description: "Systèmes d'élévation optimisés pour les parkings souterrains et concessions automobiles.",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Escaliers mécaniques",
    description: "Flux continu et design moderne pour les grands espaces publics et commerciaux.",
    image: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Portes de garage automatiques",
    description: "Sécurité et praticité avec des motorisations fiables pour résidences et industries.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-24 bg-liftia-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-liftia-dark mb-4"
            >
              Notre Gamme de Produits
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              className="h-1 bg-liftia-accent mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Des équipements de haute technologie répondant aux standards internationaux les plus stricts en matière de sécurité et de performance.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="hidden md:flex items-center gap-2 text-liftia-blue font-semibold hover:text-liftia-accent transition-colors"
          >
            Voir le catalogue complet <ArrowRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-liftia-dark/90 via-liftia-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {product.description}
                </p>
                <div className="overflow-hidden">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-liftia-accent text-white px-6 py-2.5 rounded-md font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-200 hover:bg-blue-500"
                  >
                    Demander un devis <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
