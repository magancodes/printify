import React from 'react';
import { MessageCircle, ArrowRight, Star, Printer } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="pt-32 pb-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={ref}
            className={`max-w-xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-8'
            }`}
          >
            {/* Rating */}
            <div className={`flex items-center gap-2 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`fill-black text-black transition-all duration-300 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-extralight text-sm tracking-wide">4.9/5 from 200+ clients</span>
            </div>
            
            <h1 className={`text-5xl lg:text-6xl font-extralight text-black leading-[1.1] mb-8 tracking-tight transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Smart Printing Solutions for Smart Businesses
            </h1>
            
            <p className={`text-lg text-gray-600 mb-10 leading-relaxed font-extralight tracking-wide transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              From business cards to branding kits, Printify India delivers it all — beautifully printed and right on time.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="bg-black text-white px-8 py-4 font-extralight text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
                <MessageCircle size={18} />
                MESSAGE ON WHATSAPP
              </button>
              
              <button className="border border-black text-black px-8 py-4 font-extralight text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
                VIEW CATALOG
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 blur-0 translate-x-0 scale-100' : 'opacity-0 blur-sm translate-x-8 scale-95'
          }`}>
            <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white border border-gray-200 flex items-center justify-center mb-4 mx-auto">
                  <Printer size={32} className="text-black" />
                </div>
                <p className="text-gray-500 font-extralight text-sm tracking-wide">Professional Print Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;