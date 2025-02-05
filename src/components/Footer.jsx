import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-4 text-center mt-10 shadow-inner backdrop-blur-sm">
      <p>© {new Date().getFullYear()} Nova Dev. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
