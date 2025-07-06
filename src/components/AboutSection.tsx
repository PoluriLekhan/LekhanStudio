
import React from 'react';
import { Heart, Code, Sparkles, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-12 md:p-16 text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <Heart className="w-16 h-16 text-pink-400 neon-glow animate-pulse" />
                <Sparkles className="w-6 h-6 text-cyan-400 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Built with Heart, Vision & Code
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Lekhan Studio is my dream turned into code — a futuristic AI platform crafted for developers, 
              creators, and curious minds. I've built this with heart, vision, and attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 mx-auto">
                <Code className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Crafted with Precision</h3>
              <p className="text-white/60">Every line of code written with purpose, every interaction designed with care.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3 mx-auto">
                <Sparkles className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Premium Experience</h3>
              <p className="text-white/60">Designed to feel like a $100,000 product with attention to every detail.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 mx-auto">
                <Users className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">For Creators</h3>
              <p className="text-white/60">Built for developers, creators, and curious minds who dare to dream big.</p>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-lg text-white/70 italic">
              "Every click opens up creativity. Every feature is crafted with love. 
              I hope you enjoy exploring it as much as I loved building it."
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <span className="text-purple-300 font-medium">Lekhan</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
