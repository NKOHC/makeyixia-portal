import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { products } from '../data/products';
import { posts } from '../data/posts';

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
              href="/products" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              查看作品
            </a>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">产品展示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a 
                  href={product.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  了解更多 →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">最新博客</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="border rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={post.link} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/blog"
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              查看更多文章
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
} 