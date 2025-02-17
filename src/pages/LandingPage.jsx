import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Inicio = () => {
  return (
      <div className="bg-gradient-to-b from-[#1a0738] via-[#100d3e] to-[#240b49] text-white font-sans">
        <Helmet>
          <title>Nova Dev - Inicio</title>
          <meta
            name="description"
            content="Nova Dev ofrece soluciones en desarrollo de software, páginas web y productos tecnológicos innovadores."
          />
        </Helmet>

        {/* Sección de Hero sin imagen de fondo */}
        <section
          className="relative min-h-screen flex items-center justify-center"
        >
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-wide mb-6 animate-fadeIn">Nova Dev</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slideUp">
              Impulsamos el futuro con soluciones tecnológicas innovadoras.
            </p>
            <a
              href="/services"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800 to-black hover:text-blue-400 transition-colors rounded-md text-white font-medium text-3xl shadow-lg animate-pulse"
            >
              Descubre Nuestros Servicios
            </a>
          </div>
        </section>
      </div>
  );
};

export default Inicio;