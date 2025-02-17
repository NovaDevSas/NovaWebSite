import React, { useState } from 'react';
import Layout from '../components/Layout';

const Services = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => setIsAnnual(!isAnnual);

  const plans = [
    {
      title: "Plan Básico: Sitio Web Inicial",
      description: "Presencia online simple y profesional para freelancers y pequeños negocios.",
      features: [
        "Dominio gratuito por 1 año",
        "Hosting básico",
        "Diseño responsivo",
        "Hasta 5 páginas estáticas",
        "SEO básico",
      ],
      monthly: "$200,000 COP",
      annual: "$2,000,000 COP",
      discount: "17% DCTO",
    },
    {
      title: "Plan Intermedio: Sitio Web Empresarial",
      description: "Funcionalidades y personalización para pymes que requieren más.",
      features: [
        "Dominio gratuito por 1 año",
        "Hosting avanzado",
        "Diseño semi-personalizado",
        "Hasta 10 páginas estáticas",
        "Blog integrado y SEO avanzado",
      ],
      monthly: "$400,000 COP",
      annual: "$4,200,000 COP",
      discount: "15% DCTO",
    },
    {
      title: "Plan Avanzado: Tienda Online",
      description: "Solución e-commerce completa para negocios que quieren vender en línea.",
      features: [
        "Dominio gratuito por 1 año",
        "Hosting avanzado",
        "E-commerce integrado",
        "Diseño personalizado",
        "Páginas ilimitadas y SEO avanzado",
      ],
      monthly: "$800,000 COP",
      annual: "$8,000,000 COP",
      discount: "20% DCTO",
    },
  ];

  return (
      <section className="py-20 bg-gradient-to-b from-[#1a0738] via-[#100d3e] to-[#240b49] text-white">
        <div className="container mx-auto px-4">
          {/* Sección de Planes de Páginas Web */}
          <section id="pricingSection" className="py-16">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-extrabold tracking-wide mb-4">Planes de Páginas Web</h3>
              <div className="flex justify-center items-center">
                <span className={`mr-4 text-2xl font-bold ${!isAnnual ? 'text-white' : 'text-gray-300'}`}>
                  Mensual
                </span>
                <label htmlFor="toggle" className="relative inline-block w-16 h-8">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="opacity-0 w-0 h-0"
                    checked={isAnnual}
                    onChange={togglePricing}
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-full transition-all duration-300"></span>
                  <span
                    className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 shadow-md"
                    style={{ transform: isAnnual ? 'translateX(8px)' : 'translateX(0)' }}
                  ></span>
                </label>
                <span className={`ml-4 text-2xl font-bold ${isAnnual ? 'text-white' : 'text-gray-300'}`}>
                  Anual
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="futuristic-card relative flex flex-col rounded-xl p-6 shadow-2xl transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-center mb-4">
                    <h4 className="text-2xl font-bold">{plan.title}</h4>
                  </div>
                  {isAnnual && plan.discount && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-600 to-pink-600 text-xs font-bold text-white px-3 py-1 transform rotate-45 translate-x-6 -translate-y-3 shadow-lg">
                      {plan.discount}
                    </div>
                  )}
                  <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
                  <ul className="mb-6 space-y-2 text-gray-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors rounded-md text-white font-medium text-2xl shadow-lg">
  {isAnnual ? plan.annual : plan.monthly}
</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
  );
};

export default Services;