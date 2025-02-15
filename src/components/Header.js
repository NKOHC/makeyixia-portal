import React from 'react';

export default function Header() {
  const navigation = [
    { name: '首页', href: '/' },
    { name: '关于', href: '/about' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-[#4B4BF7] hover:text-[#3A3AE6] transition-colors">
              马文的创造日记
            </a>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#4B4BF7] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 