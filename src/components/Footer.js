import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">马文的创造日记</h3>
            <p className="text-gray-400">分享技术创新与个人思考</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">产品中心</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">博客文章</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">关于我</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-gray-400">Email: contact@example.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 马文的创造日记. All rights reserved.</p>
          <p className="mt-2">备案号：浙ICP备2025150431号</p>
        </div>
      </div>
    </footer>
  );
} 