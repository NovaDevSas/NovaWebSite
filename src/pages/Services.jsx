import React, { useState } from 'react';

const Services = () => {
  const [showWebPlans, setShowWebPlans] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  const openWebPlans = () => setShowWebPlans(true);
  const closeWebPlans = () => setShowWebPlans(false);
  const togglePricing = () => setIsAnnual(!isAnnual);

  const plans = [
    {
      title: "Plan Básico: Sitio Web Inicial",
      description:
        "Presencia online simple y profesional para freelancers y pequeños negocios.",
      features: [
        "✅ Dominio gratuito por 1 año",
        "✅ Hosting básico",
        "✅ Diseño responsivo",
        "✅ Hasta 5 páginas estáticas",
        "✅ SEO básico",
      ],
      monthly: "$200,000 COP",
      annual: "$2,000,000 COP",
      discount: "17% dcto",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Plan Intermedio: Sitio Web Empresarial",
      description:
        "Funcionalidades y personalización para pymes que requieren más.",
      features: [
        "✅ Dominio gratuito por 1 año",
        "✅ Hosting avanzado",
        "✅ Diseño semi-personalizado",
        "✅ Hasta 10 páginas estáticas",
        "✅ Blog integrado y SEO avanzado",
      ],
      monthly: "$400,000 COP",
      annual: "$4,200,000 COP",
      discount: "15% dcto",
      image:
        "https://images.pexels.com/photos/3184453/pexels-photo-3184453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Plan Avanzado: Tienda Online",
      description:
        "Solución e-commerce completa para negocios que quieren vender en línea.",
      features: [
        "✅ Dominio gratuito por 1 año",
        "✅ Hosting avanzado",
        "✅ E-commerce integrado",
        "✅ Diseño personalizado",
        "✅ Páginas ilimitadas y SEO avanzado",
      ],
      monthly: "$800,000 COP",
      annual: "$8,000,000 COP",
      discount: "20% dcto",
      image:
        "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Creación de Páginas Web (abre modal) */}
          <div
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 relative group"
            onClick={openWebPlans}
          >
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">Creación de Páginas Web</h3>
            </div>
          </div>

          {/* Software a la Medida */}
          <div className="transform hover:scale-105 transition-transform duration-300 relative group">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">Software a la Medida</h3>
            </div>
          </div>

          {/* Aplicaciones Móviles */}
          <div className="transform hover:scale-105 transition-transform duration-300 relative group">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">Aplicaciones Móviles</h3>
            </div>
          </div>

          {/* Inteligencia de Negocios */}
          <div className="transform hover:scale-105 transition-transform duration-300 relative group">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">Inteligencia de Negocios</h3>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="transform hover:scale-105 transition-transform duration-300 relative group">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">Machine Learning</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup para los Planes de Páginas Web */}
      {showWebPlans && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 text-white rounded-lg shadow-2xl max-w-5xl w-full relative overflow-y-auto max-h-full">
            <button
              onClick={closeWebPlans}
              className="absolute top-4 right-4 text-3xl font-bold hover:text-blue-400 transition-colors"
            >
              &times;
            </button>
            <div className="p-8">
              <h3 className="text-4xl font-extrabold text-center mb-8 tracking-wide">
                Planes de Páginas Web
              </h3>

              {/* Toggle Switch para cambiar entre precios */}
              <div className="flex justify-center items-center mb-10">
                <span className={`mr-4 text-2xl font-bold ${!isAnnual ? 'text-blue-400' : 'text-gray-400'}`}>
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
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-700 rounded-full transition-colors duration-300"></span>
                  <span
                    className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300"
                    style={{ transform: isAnnual ? 'translateX(8px)' : 'translateX(0)' }}
                  ></span>
                </label>
                <span className={`ml-4 text-2xl font-bold ${isAnnual ? 'text-blue-400' : 'text-gray-400'}`}>
                  Anual
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                  >
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-2xl font-bold mb-4">{plan.title}</h4>
                    <p className="mb-4 text-sm">{plan.description}</p>
                    <ul className="mb-4 space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    {isAnnual && plan.discount && (
                      <p className="mb-2 text-center text-sm font-semibold text-green-400">
                        {plan.discount}
                      </p>
                    )}
                    <div className="mt-auto">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-center font-bold text-2xl">
                        {isAnnual ? plan.annual : plan.monthly}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
