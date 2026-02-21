import { Award, Star, Globe } from 'lucide-react';

export default function Awards() {
  const distinctions = [
    { title: "Médaille d'Or", place: "Genève, Suisse", icon: <Award size={48} className="text-yellow-400" /> },
    { title: "Grand Prix Oscar", place: "Développement", icon: <Star size={48} className="text-yellow-400" /> },
    { title: "Brevet International", place: "OAPI", icon: <Globe size={48} className="text-yellow-400" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tighter">
          Prix & Distinctions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {distinctions.map((d, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-[3.5rem] text-center hover:bg-white/10 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {d.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{d.title}</h3>
              <p className="text-blue-200/40 font-black uppercase text-[10px] tracking-[0.2em]">{d.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}