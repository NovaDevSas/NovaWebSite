import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca' },
    { path: '/services', label: 'Servicios' },
    { path: '/contact', label: 'Contacto' }
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white py-6 shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <h1 className="text-4xl font-bold tracking-wide">
          Nova Dev
        </h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1'
                      : 'hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
