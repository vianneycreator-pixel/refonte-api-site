import { ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={14} /> Notre Mission
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8">
              L'excellence scientifique au service de tous.
            </h2>
            <p className="text-xl text-blue-100/60 leading-relaxed font-light">
              Notre laboratoire allie les connaissances séculaires à une rigueur scientifique absolue pour développer des traitements qui changent la donne sur le continent africain et au-delà.
            </p>
          </div>
          
          <div className="flex-1 w-full" data-aos="fade-left">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-3 rounded-[4rem] shadow-2xl">
               <div className="bg-blue-600/10 rounded-[3.5rem] p-16 aspect-square flex items-center justify-center relative overflow-hidden group">
                  <div className="text-center group-hover:scale-110 transition-transform duration-700">
                    <div className="text-8xl mb-6">🔬</div>
                    <div className="text-white font-black text-xl uppercase tracking-[0.2em]">Innovation</div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}