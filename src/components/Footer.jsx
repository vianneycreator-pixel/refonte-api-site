export default function Footer() {
  return (
    <footer className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-4xl font-black text-white tracking-tighter mb-10">
          API-BENIN
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black text-blue-100/30 uppercase tracking-[0.2em] mb-16">
          <a href="#" className="hover:text-white transition-colors duration-300">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
        <p className="text-blue-100/10 text-[10px] font-bold tracking-widest uppercase">
          &copy; 2026 API-BENIN INTERNATIONAL. TOUS DROITS RÉSERVÉS.
        </p>
      </div>
    </footer>
  );
}