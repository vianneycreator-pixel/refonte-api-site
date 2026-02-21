import { useState } from 'react';
import { Search, FileText, X, CheckCircle2, FlaskConical } from 'lucide-react';

// Imports images (assurez-vous des noms de fichiers)
import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';
import imgLaxatif from '../assets/products/laxatif.jpg.png';
import imgPollen from '../assets/products/pollenapi.jpg.png';

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "API-PALU",
      category: "Paludisme",
      image: imgPalu,
      desc: "Phytomédicament Antipaludéen naturel. La solution africaine au fléau du paludisme.",
      details: "Scientifiquement valable et autorisé dans plusieurs pays d'Afrique. Agit efficacement contre toutes les formes de paludisme.",
      color: "bg-green-600"
    },
    {
      name: "API-VITAL",
      category: "Cardiovasculaire",
      image: imgVital,
      desc: "Régulateur du système cardio-vasculaire et brûleur de graisses.",
      details: "Entretient et débouche les artères coronaires. Agit sur l'hypertension et l'hypotension. Brûle les graisses et les cholestérols LDL.",
      color: "bg-red-600"
    },
    {
      name: "CVC-API",
      category: "Hypertension",
      image: imgCvc,
      desc: "Excellent hypotenseur et fluidificateur sanguin.",
      details: "Normalise le taux de cholestérol, débouche et entretient les vaisseaux sanguins. Facilite l'oxygénation des tissus.",
      color: "bg-blue-600"
    },
    {
      name: "LAXATIF-API / MULTIGUERISON",
      category: "Digestion & Foie",
      image: imgLaxatif,
      desc: "La solution pour les problèmes de foie et de digestion en Afrique.",
      details: "Traite ictère, indigestion, constipation. Lutte contre les hémorroïdes et les règles douloureuses.",
      color: "bg-emerald-600"
    },
    {
      name: "POLLEN",
      category: "Énergie",
      image: imgPollen,
      desc: "Complément alimentaire 100% naturel.",
      details: "Lutte contre le surmenage et la fatigue générale. Régulateur du poids corporel et des hormones.",
      color: "bg-orange-500"
    }
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un symptôme (foie, tension...)" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 outline-none shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col">
              <div className="h-64 bg-white flex items-center justify-center p-6 border-b border-gray-50">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain" />
                ) : (
                  <FlaskConical className="text-gray-100" size={80} />
                )}
              </div>
              <div className="p-8 flex-grow">
                <span className="text-[10px] font-black text-blue-900/40 uppercase tracking-[2px]">{p.category}</span>
                <h3 className="text-2xl font-bold text-blue-900 mt-2">{p.name}</h3>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="px-8 pb-8">
                <button 
                  onClick={() => setSelectedProduct(p)}
                  className="w-full py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <FileText size={16} /> Détails Médicaux
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/90 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full">
              <X size={24} />
            </button>
            <div className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-40 h-40 bg-white rounded-3xl flex items-center justify-center border border-gray-100">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full max-h-full object-contain p-2" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-2 mt-2 text-green-600">
                    <CheckCircle2 size={16} />
                    <span className="uppercase text-xs font-black tracking-widest">{selectedProduct.category}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2rem] border-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">{selectedProduct.details}</p>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="mt-8 w-full py-4 bg-blue-900 text-white font-bold rounded-2xl hover:bg-green-600 transition-all">
                Fermer la fiche
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}