import React from 'react';
import ServiceSection from '../components/ServicesSection';
const Services = () => {
  // Datos para "Planes de Páginas Web"
  const webPlans = [
    {
      title: "Plan Básico: Sitio Web Inicial",
      description: "Presencia online simple y profesional para pequeños negocios.",
      features: [
        "✅ Dominio gratuito",
        "✅ Hosting básico",
        "✅ Diseño responsivo",
        "✅ Hasta 5 páginas",
        "✅ SEO básico",
      ],
      price: "$200,000 COP",
      discount: "17% dcto",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Plan Intermedio: Sitio Web Empresarial",
      description: "Funcionalidades y personalización para pymes que requieren más.",
      features: [
        "✅ Dominio gratuito",
        "✅ Hosting avanzado",
        "✅ Diseño semi-personalizado",
        "✅ Hasta 10 páginas",
        "✅ Blog integrado y SEO avanzado",
      ],
      price: "$400,000 COP",
      discount: "15% dcto",
      image:
        "https://images.pexels.com/photos/3184453/pexels-photo-3184453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Plan Avanzado: Tienda Online",
      description: "Solución e-commerce completa para ventas en línea.",
      features: [
        "✅ Dominio gratuito",
        "✅ Hosting avanzado",
        "✅ E-commerce integrado",
        "✅ Diseño personalizado",
        "✅ Páginas ilimitadas y SEO avanzado",
      ],
      price: "$800,000 COP",
      discount: "20% dcto",
      image:
        "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Datos para "Software a la Medida"
  const customSoftwareProducts = [
    {
      title: "Sistema a Medida",
      description:
        "Desarrollo de sistemas personalizados para optimizar procesos internos.",
      features: [
        "✅ Análisis de requerimientos",
        "✅ Desarrollo ágil",
        "✅ Integración de API",
        "✅ Soporte continuo",
      ],
      price: "$500,000 COP",
      discount: "",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Datos para "Aplicaciones Móviles"
  const mobileApps = [
    {
      title: "Aplicación Híbrida",
      description:
        "Aplicaciones móviles robustas para iOS y Android con excelente rendimiento.",
      features: [
        "✅ Diseño responsivo",
        "✅ Integración de API",
        "✅ Optimización de rendimiento",
        "✅ Soporte multiplataforma",
      ],
      price: "$300,000 COP",
      discount: "",
      image:
        "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Datos para "Inteligencia de Negocios"
  const businessIntelligence = [
    {
      title: "Dashboard Interactivo",
      description:
        "Visualización y análisis de datos en tiempo real para tomar mejores decisiones.",
      features: [
        "✅ Integración de datos",
        "✅ Reportes automatizados",
        "✅ Dashboard interactivo",
        "✅ Alertas y notificaciones",
      ],
      price: "$350,000 COP",
      discount: "",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Datos para "Machine Learning"
  const machineLearning = [
    {
      title: "Modelo Predictivo",
      description:
        "Desarrollo de modelos de ML para predecir tendencias y optimizar procesos.",
      features: [
        "✅ Análisis de datos",
        "✅ Algoritmos personalizados",
        "✅ Validación de modelos",
        "✅ Implementación en producción",
      ],
      price: "$600,000 COP",
      discount: "",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Sección de Planes de Páginas Web */}
      <ServiceSection serviceTitle="Planes de Páginas Web" products={webPlans} />

      {/* Sección de Software a la Medida */}
      <ServiceSection serviceTitle="Software a la Medida" products={customSoftwareProducts} />

      {/* Sección de Aplicaciones Móviles */}
      <ServiceSection serviceTitle="Aplicaciones Móviles" products={mobileApps} />

      {/* Sección de Inteligencia de Negocios */}
      <ServiceSection serviceTitle="Inteligencia de Negocios" products={businessIntelligence} />

      {/* Sección de Machine Learning */}
      <ServiceSection serviceTitle="Machine Learning" products={machineLearning} />
    </div>
  );
};

export default Services;
