import React from 'react';

const SubproductDetails = ({ title, description, features, price, discount, image }) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      <p className="mb-4 text-sm">{description}</p>
      <ul className="mb-4 space-y-2 text-sm">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      {discount && (
        <p className="mb-2 text-center text-sm font-semibold text-green-400">{discount}</p>
      )}
      <div className="mt-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-center font-bold text-2xl">
          {price}
        </div>
      </div>
    </div>
  );
};

export default SubproductDetails;
