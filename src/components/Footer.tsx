import React from 'react';
import { Printer, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <Printer size={14} className="text-black" />
              </div>
              <span className="text-lg font-light tracking-wide">Printify India</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md font-light text-sm">
              Your trusted partner for smart printing solutions. We bring your ideas to life with quality, creativity, and precision.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors font-light text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors font-light text-sm">Services</a></li>
              <li><a href="#catalog" className="text-gray-400 hover:text-white transition-colors font-light text-sm">Catalog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors font-light text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-sm font-light mb-6 tracking-wide uppercase">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center font-light text-xs tracking-wide">
            © 2025 PRINTIFY INDIA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;