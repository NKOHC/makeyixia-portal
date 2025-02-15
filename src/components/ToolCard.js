import React from 'react';

export default function ToolCard({ title, description, icon, link }) {
  return (
    <a 
      href={link}
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
  );
} 