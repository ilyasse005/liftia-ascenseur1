import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-liftia-dark text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-liftia-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">LIFTIA</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              LIFTIA SARL AU est votre partenaire de confiance pour l'installation, la maintenance et la modernisation d'ascenseurs et systèmes de mobilité verticale au Maroc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#accueil" className="hover:text-liftia-accent transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Nos Services</a></li>
              <li><a href="#produits" className="hover:text-liftia-accent transition-colors">Nos Produits</a></li>
              <li><a href="#maintenance" className="hover:text-liftia-accent transition-colors">Maintenance</a></li>
              <li><a href="#contact" className="hover:text-liftia-accent transition-colors">Demander un devis</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Installation d'ascenseurs</a></li>
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Maintenance & Dépannage</a></li>
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Modernisation</a></li>
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Audit Technique</a></li>
              <li><a href="#services" className="hover:text-liftia-accent transition-colors">Mise aux normes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-liftia-accent flex-shrink-0 mt-0.5" />
                <span>77 Rue Mohamed Smiha, 8ème étage<br/>Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-liftia-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+212600674748" className="hover:text-liftia-accent transition-colors">+212 6 00 67 47 48</a>
                  <a href="tel:+212703030663" className="hover:text-liftia-accent transition-colors">+212 7 03 03 06 63</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-liftia-accent flex-shrink-0" />
                <a href="mailto:liftia.ascenseur@outlook.com" className="hover:text-liftia-accent transition-colors">liftia.ascenseur@outlook.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LIFTIA SARL AU. Tous droits réservés.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 hover:bg-liftia-accent text-white rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
