import React from 'react';
import { Gift, Store, Shirt } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeaturedProducts = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  
  const products = [
    {
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Branded gift boxes, mugs, stationery, and premium corporate gifts that make lasting impressions.',
    },
    {
      icon: Store,
      title: 'Exhibition Stalls',
      description: 'Custom booth design and print solutions for trade shows, exhibitions, and business events.',
    },
    {
      icon: Shirt,
      title: 'Merchandising',
      description: 'T-shirts, tote bags, badges, and promotional items that showcase your brand perfectly.',
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-extralight text-black mb-6 leading-tight tracking-tight">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-extralight tracking-wide">
            Professional printing solutions designed to elevate your business presence and drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon with animated border */}
                <div className={`relative w-16 h-16 bg-white border-2 border-black flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                  isVisible ? 'animate-pulse' : ''
                }`}>
                  <Icon size={24} className="text-black" />
                  {/* Animated corner accents */}
                  <div className={`absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-black transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 200 + 300}ms` }}></div>
                  <div className={`absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-black transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}></div>
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-black transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 200 + 500}ms` }}></div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-black transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 200 + 600}ms` }}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-light text-black mb-4 tracking-wide">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed font-extralight text-sm mb-6 tracking-wide">{product.description}</p>
                
                <button className={`text-black font-extralight text-sm tracking-wider hover:underline transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-bounce' : ''
                }`} style={{ animationDelay: `${index * 200 + 800}ms`, animationDuration: '2s', animationIterationCount: '1' }}>
                  GET QUOTE →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;