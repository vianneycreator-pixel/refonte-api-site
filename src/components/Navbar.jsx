import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Produits', path: '/produits' },
    { name: 'Recherches', path: '#recherches' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-[100]">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[2.5rem] px-8 py-4 transition-all duration-500">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-black text-2xl text-blue-900 tracking-tighter">
            API-BENIN
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-[13px] font-black text-gray-800 hover:text-green-600 transition-colors uppercase tracking-[0.15em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-blue-900 hover:bg-blue-50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg active:scale-95">
              Commander
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Menu Burger) */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-6 border-t border-gray-100/50 pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-center text-lg font-bold text-gray-800 hover:text-green-600"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">
              Commander API-PALU
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}