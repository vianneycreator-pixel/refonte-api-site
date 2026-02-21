import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      {/* Effet Glassmorphism : Fond blanc translucide + Flou d'arrière-plan */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500">
        
        <div className="flex-shrink-0">
          <Link to="/" className="font-bold text-2xl text-blue-900 tracking-tighter">API-BENIN</Link>
        </div>
        
        <div className="hidden md:flex space-x-10 text-[13px] font-bold text-gray-800 uppercase tracking-widest">
          <Link to="/" className="hover:text-green-600 transition-colors">Accueil</Link>
          <Link to="/produits" className="hover:text-green-600 transition-colors">Nos Produits</Link>
          <a href="#recherches" className="hover:text-green-600 transition-colors">Recherches</a>
        </div>
        
        <div>
          <button className="bg-blue-900 text-white px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-green-600 transition-all shadow-lg active:scale-95">
            Commander
          </button>
        </div>
      </div>
    </nav>
  );
}