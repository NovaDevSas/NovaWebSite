import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white py-6 shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <h1 className="text-4xl font-bold tracking-wide">
          Nova Dev
        </h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Acerca
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
