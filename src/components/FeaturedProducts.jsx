import { ArrowRight, Zap, Droplets, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import de l'image phare (API-PALU)
import imgPalu from '../assets/products/apipalu.jpg.png';

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const features = [
    { icon: <Zap size={20} />, text: "Action Rapide" },
    { icon: <Droplets size={20} />, text: "100% Naturel" },
    { icon: <Shield size={20} />, text: "Certifié" }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Image Produit Phare */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex justify-center bg-white">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
                <img 
                  src={imgPalu} 
                  alt="API-PALU" 
                  loading="lazy"
                  className="relative z-10 max-h-[400px] object-contain transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Texte et Contenu */}
            <div className="lg:w-1/2 p-12 lg:p-20">
              <span className="text-green-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
                Produit de Référence
              </span>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8">
                API-PALU : <br /> La science au service de la vie.
              </h2>
              
              <p className="text-blue-100/60 text-lg leading-relaxed mb-10 font-medium">
                Premier phytomédicament de référence contre le paludisme, API-PALU incarne l'excellence de la recherche béninoise. Une solution naturelle, puissante et accessible pour protéger votre santé.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-green-500">{f.icon}</span>
                    {f.text}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/api-palu')}
                className="group flex items-center gap-4 bg-white text-blue-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 hover:text-white transition-all shadow-xl active:scale-95"
              >
                En savoir plus <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}