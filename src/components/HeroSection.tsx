
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Lekhan Studio
          </h1>
          
          <div className="fade-in-delay-1">
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Welcome to Lekhan Studio — Crafted for Focus, Built for the Future.
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover a space where design stays minimal, performance stays sharp, and every element serves a purpose. No clutter. No glow. Just powerful AI tools and seamless experiences — designed to inspire creators, developers, and curious minds like you.
            </p>
          </div>

          <div className="fade-in-delay-2">
            <button 
              onClick={scrollToProjects}
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-300 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
