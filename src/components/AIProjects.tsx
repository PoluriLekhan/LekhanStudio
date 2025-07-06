import React, { useState } from 'react';
import { MessageSquare, Search, Mic, ArrowRight } from 'lucide-react';

const AIProjects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
      id: 'multi-model',
      title: 'Multi-Model AI',
      description: 'Advanced AI system that combines multiple models for comprehensive analysis and intelligent responses.',
      features: ['Natural Language Processing', 'Image Recognition', 'Data Analysis', 'Smart Predictions'],
      icon: Search,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      link: 'https://ai-bice-sigma.vercel.app/'
    },
    {
      id: 'messaging',
      title: 'Fast Messaging AI',
      description: 'Lightning-fast conversational AI designed for real-time communication and instant responses.',
      features: ['Real-time Chat', 'Context Awareness', 'Multi-language Support', 'Smart Suggestions'],
      icon: MessageSquare,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      link: 'https://empathic-voice-interface-starter-phi-six.vercel.app/'
    },
    {
      id: 'voice',
      title: 'Voice Interaction AI',
      description: 'Natural voice processing AI that understands and responds with human-like conversation.',
      features: ['Speech Recognition', 'Voice Synthesis', 'Emotion Detection', 'Natural Dialogue'],
      icon: Mic,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      link: 'https://nextjs-ai-chatbot-iota-peach-97.vercel.app/'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive AI Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore featured AI tools designed for creativity, efficiency, and innovation. 
            Click any card to learn more and get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isExpanded = expandedCard === project.id;

            return (
              <div
                key={project.id}
                className={`clean-card cursor-pointer transform hover:scale-105 transition-all duration-300 fade-in-delay-${index + 1} ${project.color}`}
                onClick={() => toggleCard(project.id)}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${project.iconColor} bg-white rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {isExpanded && (
                    <div className="space-y-4 animate-in slide-in-from-top duration-300">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {!isExpanded && (
                    <div className="text-gray-400 text-sm">
                      Click to explore →
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
