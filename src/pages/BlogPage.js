import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { posts } from '../data/posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <Container>
            <h1 className="text-4xl font-bold text-center mb-4">博客文章</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              分享技术见解、创作思考和项目经验
            </p>
          </Container>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <Container>
            <div className="space-y-12">
              {posts.map((post, index) => (
                <article 
                  key={index} 
                  className="border-b pb-12 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    <a href={post.link} className="hover:text-blue-600">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4">
                    <a 
                      href={post.link}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      阅读全文
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
} 