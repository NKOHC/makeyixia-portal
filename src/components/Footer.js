import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4B4BF7]">马文的创造日记</h3>
            <p className="text-gray-400">做一些给自己和朋友们的小工具</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-[#4B4BF7]">联系方式</h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/images/wechat-qr.JPG" 
                  alt="微信二维码" 
                  className="w-32 h-32 rounded-lg"
                />
                <p className="mt-2 text-sm text-gray-400">微信</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/images/jike-qr.png" 
                  alt="即刻二维码" 
                  className="w-32 h-32 rounded-lg"
                />
                <p className="mt-2 text-sm text-gray-400">即刻</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 space-y-2">
            <p> 2024 马文的创造日记. All rights reserved.</p>
            <p>
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
      </div>
    </footer>
  );
}