import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import StatsSection from './components/StatsSection';
import FeaturedProducts from './components/FeaturedProducts';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBy />
      <StatsSection />
      <FeaturedProducts />
      <ServicesSection />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;