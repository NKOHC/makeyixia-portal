import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Container from '../src/components/Container';
import ToolCard from '../src/components/ToolCard';
import Layout from '../src/components/Layout';

const tools = [
  {
    title: '戒烟助手',
    description: '记录抽烟情况，一步步戒烟',
    icon: '🚬',
    link: '/quit-smoking'
  },
  {
    title: '储蓄助手',
    description: '记录我的财务情况，还款进度',
    icon: '💰',
    link: '/savings-tracker'
  }
];

export default function Home() {
  return (
    <Layout>
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#4B4BF7] text-white py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Be A Maker
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                做一些给自己和朋友们的小工具
              </p>
            </div>
          </Container>
        </section>

        {/* Tools Section */}
        <section className="py-16">
          <Container>
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {tools.map((tool, index) => (
                  <ToolCard key={index} {...tool} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </Layout>
  );
} 