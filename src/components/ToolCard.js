import React from 'react';
import { useState } from 'react';

export default function ToolCard({ title, description, icon, link }) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div className="p-4">
        <a 
          href={link}
          onClick={handleClick}
          className="block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100"
        >
          <div className="p-8">
            <div className="text-5xl mb-6">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 line-clamp-2 mb-6">{description}</p>
            <span className="inline-flex items-center text-[#4B4BF7] hover:text-[#3A3AE6] font-medium">
              试试看 <span className="ml-2">→</span>
            </span>
          </div>
        </a>
      </div>

      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          正在做，快了，快了 😊
        </div>
      )}
    </>
  );
} 