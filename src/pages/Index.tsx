
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AIProjects from '@/components/AIProjects';
import PersonalPortfolio from '@/components/PersonalPortfolio';

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      <HeroSection />
      <AIProjects />
      <PersonalPortfolio />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-2">
            © 2025 Lekhan Studio.
          </p>
          <p className="text-sm text-gray-400">
            Explore Lekhan Studio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
