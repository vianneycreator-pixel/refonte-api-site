import { ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1" data-aos="fade-right">
            {/* Petit badge - Taille xs */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-black uppercase tracking-widest mb-8">
              <ShieldCheck size={14} /> Notre Mission
            </div>
            
            {/* Titre Section - Taille 6xl */}
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8">
              Transformer la biodiversité en science.
            </h2>
            
            {/* Texte descriptif - Taille xl */}
            <p className="text-xl text-blue-100/60 leading-relaxed font-light">
              Sous l'impulsion du Dr Valentin AGON, API-BENIN s'est imposé comme le leader de la pharmacopée moderne en Afrique, alliant traditions ancestrales et protocoles de recherche internationaux.
            </p>
          </div>
          
          <div className="flex-1 w-full" data-aos="fade-left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[3.5rem]">
               <div className="bg-blue-600/20 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔬</div>
                    <div className="text-white font-bold text-xl uppercase tracking-widest">Innovation Locale</div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}