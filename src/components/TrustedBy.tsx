import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TrustedBy = () => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  
  const brands = [
    'HDFC', 'Reliance', 'Infosys', 'Tata', 'Wipro', 'ICICI', 'Mahindra', 'Bajaj'
  ];

  return (
    <section className="py-16 bg-cream-50 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 blur-0' : 'opacity-30 blur-sm'
          }`}
        >
          <p className="text-center text-gray-500 text-sm font-light mb-8 uppercase tracking-wider">
            Trusted by 200+ companies
          </p>
          
          <div className="relative">
            {/* Sliding animation container */}
            <div className={`flex gap-12 transition-transform duration-2000 ease-out ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className={`text-gray-400 font-extralight text-lg hover:text-gray-600 transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
            
            {/* Second row sliding in opposite direction */}
            <div className={`flex gap-12 mt-8 transition-transform duration-2000 ease-out ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}>
              {brands.slice().reverse().map((brand, index) => (
                <div
                  key={index}
                  className={`text-gray-300 font-extralight text-lg hover:text-gray-500 transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + brands.length) * 100}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;