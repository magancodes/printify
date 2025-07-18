import React from 'react';
import { FileText, Megaphone, Package, Building } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: FileText,
      title: 'Business Essentials',
      description: 'Letterheads, ID cards, envelopes, and all your daily business stationery needs.',
      gradient: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Megaphone,
      title: 'Signage & Banners',
      description: 'Indoor/Outdoor signage, flex banners, acrylic displays, and promotional materials.',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Building,
      title: 'Marketing Material',
      description: 'Flyers, brochures, standees, and eye-catching marketing collateral.',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      icon: Package,
      title: 'Packaging',
      description: 'Custom boxes, labels, sleeves, and packaging solutions that protect and promote.',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-purple-700 bg-clip-text text-transparent">
          What We Do Best
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;