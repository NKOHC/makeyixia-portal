import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <Container>
            <h1 className="text-4xl font-bold text-center mb-4">产品中心</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              这里展示了我开发的各种实用工具和应用，希望能帮助到你
            </p>
          </Container>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <a 
                      href={product.link}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      查看详情
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
} 