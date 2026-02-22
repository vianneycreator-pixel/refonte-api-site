import { useState } from 'react';
import { Search, FileText, X, CheckCircle2 } from 'lucide-react';

import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';
import imgLaxatif from '../assets/products/laxatif.jpg.png';
import imgPollen from '../assets/products/pollenapi.jpg.png';

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "API-PALU", category: "Paludisme", image: imgPalu, desc: "Traitement antipaludéen majeur, reconnu mondialement.", details: "Action directe sur les souches résistantes pour un rétablissement rapide." },
    { name: "API-VITAL", category: "Cardio", image: imgVital, desc: "Soutien majeur du métabolisme et du cœur.", details: "Aide à fluidifier le sang et à prévenir les accumulations graisseuses." },
    { name: "CVC-API", category: "Tension", image: imgCvc, desc: "Régulateur de la tension artérielle 100% naturel.", details: "Assure un maintien constant de la pression sanguine et protège les vaisseaux." },
    { name: "LAXATIF-API", category: "Digestion", image: imgLaxatif, desc: "Facilite le transit et détoxifie le foie en profondeur.", details: "Formule douce et efficace pour un système digestif totalement apaisé." },
    { name: "POLLEN", category: "Énergie", image: imgPollen, desc: "Source d'énergie vitale pour vaincre la fatigue.", details: "Un concentré de nutriments pour recharger le corps et l'esprit." }
  ];

  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="py-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 max-w-md mx-auto">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-green-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un produit ou symptôme..." 
              className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 pl-14 pr-6 py-5 rounded-[2rem] text-white outline-none focus:border-green-500/50 transition-all shadow-2xl"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 group flex flex-col shadow-2xl">
              <div className="h-72 bg-white flex items-center justify-center p-10 relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  loading="lazy" 
                  className="max-h-full object-contain z-10 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              </div>
              <div className="p-10 flex-grow text-center">
                <span className="text-[10px] font-black text-green-400 uppercase tracking-[0.4em] mb-4 block">{p.category}</span>
                <h3 className="text-2xl font-black text-white tracking-tight">{p.name}</h3>
                <p className="text-blue-100/40 mt-4 text-sm leading-relaxed font-medium">{p.desc}</p>
                <button 
                  onClick={() => setSelectedProduct(p)}
                  className="mt-10 w-full py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-blue-900 transition-all active:scale-95"
                >
                  Fiche Médicale
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-blue-950/90 backdrop-blur-3xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] max-w-2xl w-full p-8 md:p-14 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-all">
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
              <div className="w-48 h-48 bg-gray-50 rounded-[3rem] flex items-center justify-center p-6 border border-gray-100 shadow-inner">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-full object-contain" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black text-blue-900 tracking-tighter leading-none">{selectedProduct.name}</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-green-600 font-black uppercase text-[10px] tracking-[0.2em]">
                  <CheckCircle2 size={16} /> Produit Certifié
                </div>
              </div>
            </div>
            <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100/50">
              <p className="text-blue-900 leading-relaxed text-xl font-medium italic">"{selectedProduct.details}"</p>
            </div>
            <button onClick={() => setSelectedProduct(null)} className="mt-12 w-full py-5 bg-blue-900 text-white font-black uppercase tracking-widest rounded-3xl text-sm hover:bg-green-600 transition-all shadow-xl">
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}