import React from 'react';

const Contact = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
      <p className="max-w-md mx-auto text-lg opacity-80">
        ¿Tienes un proyecto en mente? Escríbenos y llevemos tus ideas al siguiente nivel.
      </p>
      <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
        Enviar Mensaje
      </button>
    </section>
  );
};

export default Contact;