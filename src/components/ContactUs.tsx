import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extralight text-black mb-6 leading-tight tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Ready to bring your printing projects to life? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-light text-gray-600 mb-2 tracking-wide uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-light text-gray-600 mb-2 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-light text-gray-600 mb-2 tracking-wide uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-light text-gray-600 mb-2 tracking-wide uppercase">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors font-light resize-none"
                  placeholder="Tell us about your printing requirements..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white font-light py-4 px-6 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-light text-black mb-1 text-sm tracking-wide uppercase">WhatsApp</h4>
                    <p className="text-gray-600 font-light">+91 98765 43210</p>
                    <p className="text-xs text-gray-500 font-light">Available 24/7 for quick queries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-light text-black mb-1 text-sm tracking-wide uppercase">Email</h4>
                    <p className="text-gray-600 font-light">hello@printifyindia.com</p>
                    <p className="text-xs text-gray-500 font-light">We'll respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-light text-black mb-1 text-sm tracking-wide uppercase">Office</h4>
                    <p className="text-gray-600 font-light">Mumbai, Maharashtra, India</p>
                    <p className="text-xs text-gray-500 font-light">Visit us for consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;