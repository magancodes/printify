import React from 'react';
import { Printer } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-black flex items-center justify-center">
              <Printer size={14} className="text-white" />
            </div>
            <span className="text-lg font-light text-black tracking-wide">Printify India</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors font-light text-sm tracking-wide">HOME</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors font-light text-sm tracking-wide">SERVICES</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors font-light text-sm tracking-wide">ABOUT</a>
            <a href="#catalog" className="text-gray-600 hover:text-black transition-colors font-light text-sm tracking-wide">CATALOG</a>
          </nav>
          
          {/* CTA Button */}
          <button className="bg-black text-white px-6 py-3 font-light text-sm tracking-wide hover:bg-gray-800 transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;