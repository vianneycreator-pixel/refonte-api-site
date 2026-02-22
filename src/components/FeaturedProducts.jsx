import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const featured = [
    {
      name: "API-PALU",
      image: imgPalu,
      desc: "Antipaludéen de référence reconnu pour son efficacité d'action rapide. Une fierté de la pharmacopée moderne."
    },
    {
      name: "API-VITAL",
      image: imgVital,
      desc: "Protecteur cardio-vasculaire de premier plan. Favorise la circulation et participe à l'élimination des graisses."
    },
    {
      name: "CVC-API",
      image: imgCvc,
      desc: "Formule spécifiquement conçue pour stabiliser la tension et améliorer durablement l'oxygénation de l'organisme."
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Produits Phares</h2>
            <div className="w-24 h-1.5 bg-green-500 mt-4 rounded-full"></div>
          </div>
          <button 
            onClick={() => navigate('/produits')}
            className="hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white hover:text-blue-900 transition-all"
          >
            Voir tout le catalogue
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-10 flex flex-col group transition-all hover:bg-white/10 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] p-8 mb-10 h-72 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  loading="lazy"
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-30"></div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{p.name}</h3>
              
              <p className="text-blue-100/50 leading-relaxed text-sm mb-10 flex-grow font-medium">
                {p.desc}
              </p>
              
              <button 
                onClick={() => navigate('/produits')}
                className="flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-green-400 transition-colors"
              >
                <ArrowRight size={18} /> En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}