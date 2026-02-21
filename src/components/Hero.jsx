import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a15]">
      {/* Orbes de couleurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-500 rounded-full blur-[140px] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <div 
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 md:p-24 rounded-[4rem] shadow-2xl"
          data-aos="zoom-in"
        >
          {/* Titre Impactant - Taille 8xl */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            L'Indépendance <br /> Médicamenteuse
          </h1>
          
          {/* Sous-titre léger et aéré - Taille 2xl */}
          <p className="mt-10 text-lg md:text-2xl text-blue-100/70 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            API-BENIN invente et produit des solutions locales pour répondre aux défis 
            de santé du continent, avec une expertise reconnue mondialement.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/api-palu')}
              className="bg-white text-blue-950 px-12 py-5 rounded-3xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Découvrir API-PALU
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-3xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Nos Recherches
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}