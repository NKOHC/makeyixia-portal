import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 safe-area-pt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-[#4B4BF7] hover:text-[#3A3AE6] transition-colors">
            马文的创造日记
          </Link>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-[#4B4BF7] px-3 py-2 text-sm font-medium transition-colors">
              首页
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#4B4BF7] px-3 py-2 text-sm font-medium transition-colors">
              关于
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 