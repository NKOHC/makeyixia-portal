import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">技术创新，创意无限</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              在这里，我分享我的技术探索、创意项目和思考感悟
            </p>
            <a 
              href="/about" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              了解更多
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
} 