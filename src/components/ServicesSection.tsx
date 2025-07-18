import React from 'react';
import { FileText, Megaphone, Package, Building } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Business Essentials',
      description: 'Letterheads, ID cards, envelopes, and all your daily business stationery needs.',
    },
    {
      icon: Megaphone,
      title: 'Signage & Banners',
      description: 'Indoor/Outdoor signage, flex banners, acrylic displays, and promotional materials.',
    },
    {
      icon: Building,
      title: 'Marketing Material',
      description: 'Flyers, brochures, standees, and eye-catching marketing collateral.',
    },
    {
      icon: Package,
      title: 'Packaging Solutions',
      description: 'Custom boxes, labels, sleeves, and packaging solutions that protect and promote.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extralight text-black mb-6 leading-tight tracking-tight">
            What We Do Best
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Comprehensive printing solutions tailored to meet your business needs with precision and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center p-8 border border-gray-100 hover:border-gray-200 transition-colors duration-300">
                {/* Icon */}
                <div className="w-12 h-12 bg-black flex items-center justify-center mx-auto mb-6">
                  <Icon size={20} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-light text-black mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;