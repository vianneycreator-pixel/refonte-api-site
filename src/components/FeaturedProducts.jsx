import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import des images
import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const featured = [
    {
      name: "API-PALU",
      image: imgPalu,
      desc: "Phytomédicament antipaludéen naturel de référence, médaillé d'or à Genève pour son efficacité prouvée."
    },
    {
      name: "API-VITAL",
      image: imgVital,
      desc: "Régulateur cardio-vasculaire puissant qui aide à brûler les graisses et le mauvais cholestérol."
    },
    {
      name: "CVC-API",
      image: imgCvc,
      desc: "Solution naturelle pour normaliser la tension artérielle et faciliter l'oxygénation des tissus."
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Produits Phares</h2>
            <div className="w-20 h-1.5 bg-green-500 mt-4 rounded-full"></div>
          </div>
          <button 
            onClick={() => navigate('/produits')}
            className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-green-600 transition-all"
          >
            Voir tout le catalogue (20+)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 flex flex-col group transition-all hover:bg-white/10">
              <div className="bg-white rounded-[2.5rem] p-6 mb-8 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">{p.name}</h3>
              <p className="text-blue-100/50 leading-relaxed text-sm mb-8 flex-grow">
                {p.desc}
              </p>
              <button 
                onClick={() => navigate('/produits')}
                className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-green-400 transition-colors"
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