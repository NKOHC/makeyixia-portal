import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <Container>
            <h1 className="text-4xl font-bold text-center mb-4">关于我</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              热爱技术，热爱创造
            </p>
          </Container>
        </section>

        {/* Content */}
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <h2>个人介绍</h2>
                <p>
                  你好！我是马文，一名热爱技术和创新的开发者。我喜欢探索新技术，
                  并将其应用到实际项目中，解决实际问题。
                </p>

                <h2>技术栈</h2>
                <ul>
                  <li>前端：React, Vue, TypeScript</li>
                  <li>后端：Node.js, Python</li>
                  <li>其他：Docker, AWS</li>
                </ul>

                <h2>联系方式</h2>
                <p>
                  如果你对我的项目感兴趣，或者想要交流技术，欢迎通过以下方式联系我：
                </p>
                <ul>
                  <li>Email: contact@example.com</li>
                  <li>GitHub: github.com/yourusername</li>
                </ul>

                <h2>关于本站</h2>
                <p>
                  这个网站是我用来展示个人项目和分享技术经验的平台。
                  网站使用 React 和 Tailwind CSS 构建，采用了现代化的响应式设计。
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
} 