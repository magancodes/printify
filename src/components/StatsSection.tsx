import React from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const StatsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  
  const satisfactionCount = useCountUp(95, 2000, isVisible);
  const experienceCount = useCountUp(10, 2000, isVisible);
  const savingsCount = useCountUp(10, 2000, isVisible);
  const projectsCount = useCountUp(50, 2000, isVisible);

  const stats = [
    {
      number: `${satisfactionCount}%`,
      label: 'Customer satisfaction',
      description: 'Trusted by millions, our service ensures unparalleled customer satisfaction with dedicated support and innovative solutions.'
    },
    {
      number: `${experienceCount}+`,
      label: 'Years of experience',
      description: 'Over a decade of groundbreaking innovation and deep industry insights to empower businesses worldwide.'
    },
    {
      number: `₹${savingsCount}m`,
      label: 'Client savings',
      description: 'Streamlined processes delivering over ₹10 million in financial savings and value creation for our clients.'
    },
    {
      number: `${projectsCount}k`,
      label: 'Projects completed',
      description: 'Successfully delivered over 50,000 printing projects, from business cards to large-scale campaigns.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 blur-0 translate-x-0' : 'opacity-50 blur-sm -translate-x-8'
            }`}
          >
            <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white border border-gray-200 flex items-center justify-center mb-4 mx-auto">
                  <div className="text-2xl">💼</div>
                </div>
                <p className="text-gray-500 font-extralight text-sm tracking-wide">Professional at Work</p>
              </div>
            </div>
          </div>
          
          {/* Right Stats */}
          <div ref={ref} className="space-y-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`relative p-6 border-2 border-black transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animation: isVisible ? `drawBorder 1s ease-out ${index * 200}ms both` : 'none'
                }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-black opacity-0 animate-pulse"></div>
                
                <div className="flex items-start gap-8">
                  <div className="text-4xl font-extralight text-black min-w-[100px] tracking-tight">
                    {stat.number}
                  </div>
                  <div>
                    <h3 className="font-light text-black mb-2 text-sm tracking-wide uppercase">{stat.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-extralight">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;