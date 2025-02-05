import React from 'react';

const PopupModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-2xl max-w-5xl w-full relative overflow-y-auto max-h-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl font-bold hover:text-blue-400 transition-colors">&times;</button>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default PopupModal;
