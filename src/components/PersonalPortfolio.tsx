
import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';

const PersonalPortfolio = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            👨‍💻 Lekhan Poluri
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Frontend Developer • AI Creator • Web Innovator
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build real-world web experiences with unique ideas and a passion for technology. 
            From futuristic AI tools to clean UI portfolios, everything I build is designed to 
            solve real problems beautifully.
          </p>
          
          <a 
            href="https://portifolio-steel-psi-95.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-300 group mb-12"
          >
            <span>🔗 View Portfolio</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="border-t border-gray-300 pt-8">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
            >
              <span>Scroll up to explore my creations</span>
              <ArrowUp className="w-4 h-4" />
            </button>
            
            <p className="text-gray-500">
              Built with love, curiosity, and clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPortfolio;
