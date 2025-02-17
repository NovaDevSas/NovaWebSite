import React from 'react';

const About = () => {
  const values = [
    { title: "Empatía", description: "Creemos que un equipo altamente motivado y enfocado puede generar un impacto positivo y duradero." },
    { title: "Enfoque", description: "Nos mantenemos concentrados en nuestros objetivos para garantizar resultados efectivos." },
    { title: "Curiosidad", description: "Exploramos nuevas ideas y tecnologías para ofrecer soluciones innovadoras." },
    { title: "Calidad", description: "Nos esforzamos en ofrecer productos y servicios que superen las expectativas." }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#1a0738] via-[#100d3e] to-[#240b49] text-white overflow-hidden">
      {/* Elementos de fondo con tonos morados y rosas */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-500 opacity-25 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500 opacity-25 blur-[160px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Encabezado */}
        <p className="text-sm uppercase tracking-widest text-purple-400/80">Lo que creemos</p>
        <h2 className="text-5xl font-extrabold text-white mt-3">Nuestros Valores</h2>
        <p className="text-lg opacity-70 max-w-2xl mx-auto mt-4">
          Creemos que un equipo altamente motivado y enfocado puede generar un impacto duradero en cualquier área.
        </p>

        {/* Tarjetas de Valores */}
        <div className="flex justify-center gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative w-64 p-6 rounded-xl backdrop-blur-2xl bg-white/10 border border-white/15 shadow-2xl text-center transition-transform duration-500
                          hover:scale-105 hover:shadow-xl transform ${
                            index === 0 ? '-rotate-6' : index === 1 ? '-rotate-3' : index === 2 ? 'rotate-3' : 'rotate-6'
                          }`}
            >
              {/* Fondo de la tarjeta con un leve degradado */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl"></div>

              {/* Formas decorativas sutiles dentro de las tarjetas */}
              <div className="absolute inset-0 opacity-10">
                {index === 0 && <div className="w-full h-full flex items-center justify-center"><svg width="80" height="80"><path d="M20,40 C30,10 50,10 60,40" stroke="white" strokeWidth="1" fill="none"/></svg></div>}
                {index === 2 && <div className="w-full h-full flex items-center justify-center"><svg width="80" height="80"><circle cx="40" cy="40" r="20" stroke="white" strokeWidth="1" fill="none"/></svg></div>}
                {index === 3 && <div className="w-full h-full flex items-center justify-center"><svg width="80" height="80"><path d="M10,30 L30,10 L50,30 L70,10" stroke="white" strokeWidth="1" fill="none"/></svg></div>}
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-white/90 relative z-10">{value.title}</h3>
              <p className="text-sm text-gray-300 mt-2 relative z-10">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
