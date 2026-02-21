import { useNavigate } from 'react-router-dom';
import { FileText, CheckCircle2 } from 'lucide-react';
import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const featured = [
    { name: "API-PALU", tag: "Innovation", image: imgPalu, desc: "Antipaludéen naturel médaillé à Genève [cite: 2026-02-02].", color: "border-green-600" },
    { name: "API-VITAL", tag: "Cœur", image: imgVital, desc: "Régulateur cardio-vasculaire et brûleur de cholestérol [cite: 2026-01-28].", color: "border-red-600" },
    { name: "CVC-API", tag: "Tension", image: imgCvc, desc: "Normalise la tension et facilite l'oxygénation des tissus [cite: 2026-01-28].", color: "border-blue-600" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-blue-900">Produits Phares</h2>
            <div className="w-20 h-1.5 bg-green-500 mt-4"></div>
          </div>
          <button 
            onClick={() => { window.scrollTo(0,0); navigate('/produits'); }}
            className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-blue-900/10"
          >
            Voir tout le catalogue (20+)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((p, i) => (
            <div key={i} className={`bg-white rounded-[2.5rem] border-b-8 ${p.color} p-8 hover:translate-y-[-10px] transition-all duration-300 shadow-sm`}>
              <div className="h-52 w-full flex items-center justify-center mb-8">
                <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">{p.name}</h3>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">{p.desc}</p>
              <button onClick={() => navigate('/produits')} className="mt-8 flex items-center gap-2 text-blue-900 font-bold hover:text-green-600">
                <FileText size={18} /> En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}