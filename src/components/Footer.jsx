import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a0738] via-[#100d3e] to-[#240b49] text-white py-4 text-center mt-10 shadow-inner backdrop-blur-sm">
      <p>© {new Date().getFullYear()} Nova Dev. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;