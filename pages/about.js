import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Container from '../src/components/Container';
import IntroSection from '../src/components/about/IntroSection';
import FocusSection from '../src/components/about/FocusSection';
import GoalsSection from '../src/components/about/GoalsSection';
import ContactSection from '../src/components/about/ContactSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="bg-[#4B4BF7] text-white py-24">
          <Container>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
              <IntroSection />
              <FocusSection />
              <GoalsSection />
              <ContactSection />
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  );
} 