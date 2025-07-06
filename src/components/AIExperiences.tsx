
import React from 'react';
import { MessageSquare, Search, Mic, ArrowRight, Sparkles } from 'lucide-react';

const AIExperiences = () => {
  const experiences = [
    {
      id: 'messaging',
      title: 'Messaging AI',
      subtitle: 'Lightning-Fast Conversations',
      description: 'Experience blazing-fast AI conversations with our advanced messaging system. Every response is crafted with precision and delivered in milliseconds.',
      icon: MessageSquare,
      color: 'cyan',
      features: ['Real-time responses', 'Context awareness', 'Multi-language support', 'Smart suggestions'],
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan-400',
    },
    {
      id: 'search',
      title: 'Multi-Model Search AI',
      subtitle: 'Intelligent Discovery Engine',
      description: 'Our smart search AI understands context, intent, and nuance. Find exactly what you need with unprecedented accuracy and intelligence.',
      icon: Search,
      color: 'purple',
      features: ['Semantic search', 'Multi-modal inputs', 'Contextual results', 'Learning algorithms'],
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'purple-400',
    },
    {
      id: 'voice',
      title: 'Voice Interaction AI',
      subtitle: 'Your Digital Assistant',
      description: 'Natural voice interactions that feel like talking to Jarvis. Advanced speech recognition and generation for seamless communication.',
      icon: Mic,
      color: 'green',
      features: ['Natural speech', 'Voice synthesis', 'Real-time processing', 'Emotion detection'],
      gradient: 'from-green-500 to-emerald-600',
      glowColor: 'green-400',
    },
  ];

  return (
    <section id="experiences" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Experiences</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Three revolutionary AI experiences designed to transform how you interact with artificial intelligence.
            Each one crafted with precision, powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => {
            const IconComponent = experience.icon;
            return (
              <div
                key={experience.id}
                className="group glass-card p-8 hover:neon-glow transition-all duration-500 hover:scale-105 animated-border"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <Sparkles className={`w-6 h-6 text-${experience.glowColor} absolute -top-2 -right-2 animate-pulse`} />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:neon-text transition-all">
                      {experience.title}
                    </h3>
                    <p className={`text-${experience.glowColor} font-medium text-sm uppercase tracking-wide`}>
                      {experience.subtitle}
                    </p>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-1">
                      {experience.features.map((feature, index) => (
                        <li key={index} className="text-white/60 text-sm flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${experience.glowColor}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full glass-card px-6 py-3 text-white font-medium hover:bg-gradient-to-r ${experience.gradient} hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:neon-glow`}>
                    <span>Try {experience.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIExperiences;
