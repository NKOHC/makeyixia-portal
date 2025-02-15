import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Container from '../src/components/Container';

export default function About() {
  const focuses = [
    '技术探索与创新',
    '创意项目开发',
    '用户体验设计',
    '技术写作与分享'
  ];

  const goals = [
    '分享技术经验和创新思路',
    '记录个人成长与思考',
    '与志同道合的朋友交流',
    '激发更多创意灵感'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="bg-[#4B4BF7] py-24">
          <Container>
            <div className="max-w-3xl mx-auto bg-[#FFFBF0] rounded-lg p-8 md:p-12">
              {/* 介绍部分 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">👋</span>你好，我是马文
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  我是一名热爱技术与创新的开发者，专注于探索新技术和创意项目的实现。
                  通过这个博客，我希望能够分享我在技术探索过程中的心得体会，以及对创新和设计的思考。
                </p>
              </section>

              {/* 专注领域部分 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🎯</span>我的专注
                </h2>
                <ul className="space-y-2">
                  {focuses.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 项目目标部分 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">✨</span>博客目标
                </h2>
                <div className="text-gray-700">
                  通过这个平台，我希望能够：
                  <ul className="space-y-2 mt-2">
                    {goals.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 联系方式部分 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-2">📮</span>联系我
                </h2>
                <div className="flex flex-col md:flex-row justify-start space-y-6 md:space-y-0 md:space-x-12">
                  <div>
                    <img 
                      src="/images/wechat-qr.JPG" 
                      alt="微信二维码" 
                      className="w-32 h-32 rounded-lg"
                    />
                    <p className="mt-2 text-gray-600">微信</p>
                  </div>
                  <div>
                    <img 
                      src="/images/jike.PNG" 
                      alt="即刻二维码" 
                      className="w-32 h-32 rounded-lg"
                    />
                    <p className="mt-2 text-gray-600">即刻</p>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  );
} 