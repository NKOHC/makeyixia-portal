import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4B4BF7]">马文的创造日记</h3>
            <p className="text-gray-400">做一些给自己和朋友们的小工具</p>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">关于我</a></li>
            </ul>
          </div> */}
          <div className="flex justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4B4BF7]">联系方式</h3>
              <div className="flex justify-center">
                <img 
                  src="/images/wechat-qr.JPG" 
                  alt="微信二维码" 
                  className="w-32 h-32 rounded-lg bg-white p-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 马文的创造日记. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://beian.miit.gov.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#4B4BF7] transition-colors"
            >
              备案号：浙ICP备2025150431号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 