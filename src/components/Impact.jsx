export default function Impact() {
  const stats = [
    { value: "20+", label: "Années d'expertise" },
    { value: "50+", label: "Pays distribués" },
    { value: "100%", label: "Naturel" }
  ];

  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-16 md:p-24 shadow-2xl overflow-hidden relative text-center">
          {/* Orbe de lumière interne discret */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/5 rounded-full blur-[100px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {stats.map((s, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                  {s.value}
                </div>
                <div className="text-green-400 font-black uppercase tracking-[0.25em] text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}