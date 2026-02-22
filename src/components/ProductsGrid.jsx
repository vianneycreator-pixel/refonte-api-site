// src/components/ProductsGrid.jsx
import { useState } from 'react';
import { Search, FileText, X, CheckCircle2 } from 'lucide-react';

// Imports avec les noms EXACTS de tes fichiers (minuscules respectées)
import imgPalu from '../assets/products/apipalu.jpg.png';
import imgVital from '../assets/products/apivital.jpg.png';
import imgCvc from '../assets/products/cvc.jpg.png';
import imgLaxatif from '../assets/products/laxatif.jpg.png';
import imgPollen from '../assets/products/pollenapi.jpg.png';

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "API-PALU", category: "Paludisme", image: imgPalu, desc: "Solution antipaludéenne naturelle." },
    { name: "API-VITAL", category: "Cardio", image: imgVital, desc: "Régulateur cardio-vasculaire." },
    { name: "CVC-API", category: "Tension", image: imgCvc, desc: "Hypotenseur efficace." },
    { name: "LAXATIF-API", category: "Digestion", image: imgLaxatif, desc: "Soin du foie et digestion." },
    { name: "POLLEN", category: "Énergie", image: imgPollen, desc: "Complément 100% naturel." }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden p-6">
              <div className="h-64 flex items-center justify-center bg-white/5 rounded-2xl mb-6">
                <img src={p.image} alt={p.name} className="max-h-full object-contain p-4" />
              </div>
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="text-blue-100/50 text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}