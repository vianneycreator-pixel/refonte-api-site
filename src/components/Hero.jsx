import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050a15] pt-20">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-500 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <div 
          className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-24 rounded-[4rem] shadow-2xl"
          data-aos="zoom-in"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter">
            L'Indépendance <br /> Médicamenteuse
          </h1>
          
          <p className="mt-10 text-lg md:text-2xl text-blue-100/60 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            Le laboratoire panafricain qui développe des solutions naturelles de pointe pour la santé mondiale.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/api-palu')}
              className="bg-white text-blue-950 px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Découvrir API-PALU
            </button>
            <button 
              onClick={() => navigate('/produits')}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-white/20 transition-all"
            >
              Catalogue Complet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}