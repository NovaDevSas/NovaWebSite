import React from 'react';

const ProductCard = ({ image, title, onClick }) => {
  return (
    <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300 relative group" onClick={onClick}>
      <div className="h-64 bg-cover bg-center rounded-lg shadow-2xl" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
