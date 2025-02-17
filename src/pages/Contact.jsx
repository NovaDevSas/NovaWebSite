import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
      <section className="py-20 bg-gradient-to-b from-[#1a0738] via-[#100d3e] to-[#240b49] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Contáctanos</h2>
          <p className="max-w-md mx-auto text-lg opacity-80">
            ¿Tienes un proyecto en mente? Escríbenos y llevemos tus ideas al siguiente nivel.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gray-800 to-black hover:text-blue-400 transition-colors rounded-md text-white font-medium text-2xl shadow-lg">
            Enviar Mensaje
          </button>
        </div>
      </section>
  );
};

export default Contact;