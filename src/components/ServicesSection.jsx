import React, { useState } from 'react';
import ProductCard from './ProductCard';
import PopupModal from './PopupModal';
import SubproductDetails from './SubproductDetails';

const ServiceSection = ({ serviceTitle, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="mb-16">
      <h3 className="text-4xl font-bold text-center mb-8">{serviceTitle}</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </div>
      <PopupModal isOpen={!!selectedProduct} onClose={closeModal}>
        {selectedProduct && (
          <SubproductDetails
            title={selectedProduct.title}
            description={selectedProduct.description}
            features={selectedProduct.features}
            price={selectedProduct.price}
            discount={selectedProduct.discount}
            image={selectedProduct.image}
          />
        )}
      </PopupModal>
    </div>
  );
};

export default ServiceSection;
