import React from 'react';
import { Helmet } from 'react-helmet';

const Inicio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <Helmet>
        <title>Nova Dev - Inicio</title>
        <meta
          name="description"
          content="Nova Dev ofrece soluciones en desarrollo de software, páginas web y productos tecnológicos innovadores."
        />
      </Helmet>

      {/* Sección de Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/665214/pexels-photo-665214.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide text-white mb-6 animate-fadeIn">
            Nova Dev
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slideUp">
            Impulsamos el futuro con soluciones tecnológicas innovadoras.
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 animate-pulse"
          >
            Descubre Nuestros Servicios
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
