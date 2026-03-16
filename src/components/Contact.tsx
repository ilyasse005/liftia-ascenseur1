import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-liftia-dark mb-4"
          >
            Contactez-Nous
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
            Une question, un projet ou besoin d'un devis ? Notre équipe est à votre disposition pour vous accompagner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-liftia-light p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-liftia-dark mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-liftia-accent shadow-sm flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-liftia-dark mb-1">Adresse</h4>
                    <p className="text-gray-600">77 Rue Mohamed Smiha, 8ème étage<br/>Casablanca, Maroc</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-liftia-accent shadow-sm flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-liftia-dark mb-1">Téléphones</h4>
                    <p className="text-gray-600">
                      <a href="tel:+212600674748" className="hover:text-liftia-accent transition-colors">+212 6 00 67 47 48</a><br/>
                      <a href="tel:+212703030663" className="hover:text-liftia-accent transition-colors">+212 7 03 03 06 63</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-liftia-accent shadow-sm flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-liftia-dark mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:liftia.ascenseur@outlook.com" className="hover:text-liftia-accent transition-colors">liftia.ascenseur@outlook.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846447201884!2d-7.6111111!3d33.5833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzAwLjAiTiA3wrAzNic0MC4wIlc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps LIFTIA"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-liftia-dark mb-2">Demander un devis</h3>
            <p className="text-sm text-gray-500 mb-6">Vous recevrez une réponse par email sous 24h.</p>
            
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                // Simple mailto fallback for now
                const subject = `Demande de devis LIFTIA - ${data.service}`;
                const body = `Nom: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nService: ${data.service}\n\nMessage:\n${data.message}`;
                window.location.href = `mailto:liftia.ascenseur@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors"
                  placeholder="+212 6 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service souhaité</label>
                <select 
                  id="service" 
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors bg-white"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="installation">Installation d'ascenseur</option>
                  <option value="maintenance">Contrat de maintenance</option>
                  <option value="modernisation">Modernisation</option>
                  <option value="depannage">Dépannage urgent</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-liftia-accent focus:border-liftia-accent outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre besoin..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-liftia-accent hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <span>Envoyer par Email</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
