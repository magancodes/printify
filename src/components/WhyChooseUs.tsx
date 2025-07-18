import React from 'react';
import { DollarSign, Award, Clock, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Value for Money',
      description: 'Affordable pricing with no compromise on quality. Get the best value for your investment.',
    },
    {
      icon: Award,
      title: 'Best Quality Prints',
      description: 'Premium materials and inks ensure your prints look professional and last longer.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Fast, reliable service every time. We respect your deadlines and deliver as promised.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Personalized assistance from start to finish. Your satisfaction is our top priority.',
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extralight text-black mb-6 leading-tight tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We combine quality, speed, and affordability to deliver exceptional printing solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 border border-gray-100">
                <div className="w-10 h-10 bg-black flex items-center justify-center mb-6">
                  <Icon size={18} className="text-white" />
                </div>
                
                <h3 className="text-lg font-light text-black mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;